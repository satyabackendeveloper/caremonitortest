const HeartRateRepository = require("./heart-rate.repository");


class HeartRateController {
  constructor(repository) {
    this.repository = repository;
    this.processHeartRate = this.processHeartRate.bind(this);
  }

  async processHeartRate(req, res) {
    try {
      const result = await this.repository.processHeartRate();
      res.status(200).json({
        status: "success",
        data: result
      });
    } catch (error) {
      console.log(error)
      res.status(error.status).json(error);
    }
    res.end();
  }
}

module.exports = new HeartRateController(HeartRateRepository);