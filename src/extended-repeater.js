const CustomError = require("../extensions/custom-error");

module.exports = function repeater(
  str,
  {
    repeatTimes = 1,
    separator = "+",
    addition,
    additionRepeatTimes = 1,
    additionSeparator = "|",
  }
) {
  str = String(str);
  addition = addition !== undefined ? String(addition) : "";

  let repeatdAddition = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  let repeatdStr = Array(repeatTimes)
    .fill(str + repeatdAddition)
    .join(separator);

  return repeatdStr;
};
