
// Function to get the start of the 15-minute interval and end of 15 min interval
const getStartAndEndInterval = (startDate) => {
  startDate = new Date(startDate)
  const minutes = Math.floor(startDate.getMinutes() / 15) * 15;
  startDate.setMinutes(minutes);
  startDate.setSeconds(0);
  startDate.setMilliseconds(0);

  const endDate = new Date(startDate);
  endDate.setMinutes(endDate.getMinutes() + 15);

  return {
    startDate,
    endDate
  };
};

module.exports = getStartAndEndInterval
