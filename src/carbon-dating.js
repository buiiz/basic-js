const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    parseFloat(sampleActivity).toString() !== sampleActivity ||
    +sampleActivity <= 0 ||
    +sampleActivity > 15
  )
    return false;

  const MODERN_ACTIVITY = 15;
  const HALF_LIFE_PERIOD = 5730;

  let k = 0.693 / HALF_LIFE_PERIOD;

  let t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;

  return Math.ceil(t);
};
