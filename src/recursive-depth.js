const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    arr = arr.filter((elem) => Array.isArray(elem));

    if (!arr.length) return 1;

    return 1 + arr.reduce((deep, item) => Math.max(deep, this.calculateDepth(item)), 0);
  }
};
