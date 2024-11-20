const getJsonContent = require("../../helpers/file-handle");
const getStartAndEndInterval = require("../../helpers/date-handle");
const ono = require("@jsdevtools/ono");
const { HeartRate } = require('./../../models')


class HeartRateRepository {
  constructor() {
    this.processHeartRate = this.processHeartRate.bind(this);
  }

  async processHeartRate() {
    try {
      if (!process.env.HEART_RATE_FILE) {
        throw new Error("Heart rate file is not provided.");
      }

      const heartRateData = await getJsonContent(process.env.HEART_RATE_FILE);
      if (Object.keys(heartRateData).length == 0) {
        throw new Error("File doesn't have heart rate records.")
      }

      const readings = heartRateData.clinical_data.HEART_RATE.data;

      const intervals = {};
      for (let reading of readings) {
        const { startDate, endDate } = getStartAndEndInterval(reading.on_date);
        const key = startDate.toISOString();

        if (!intervals[key]) {
          intervals[key] = { low: +reading.measurement, high: +reading.measurement, from_date: startDate, to_date: endDate };
        } else {
          intervals[key].low = Math.min(intervals[key].low, +reading.measurement);
          intervals[key].high = Math.max(intervals[key].high, +reading.measurement);
        }
      }

      const batchData = Object.keys(intervals).map((key) => ({
        from_date: intervals[key].from_date,
        to_date: intervals[key].to_date,
        low: intervals[key].low,
        high: intervals[key].high,
        patient_id: heartRateData.patient_id
      }));

      const batchSize = 50;
      for (let i = 0; i < batchData.length; i += batchSize) {
        const batch = batchData.slice(i, i + batchSize);
        await HeartRate.bulkCreate(batch);
      }

      return batchData.map((data) => ({
        from_date: data.from_date,
        to_date: data.to_date,
        measurement: {
          low: data.low,
          high: data.high,
        },
      }));

    } catch (error) {
      const status = error.status || 500;
      throw ono({
        status,
        message: error.message
      })
    }
  }
}

module.exports = new HeartRateRepository();