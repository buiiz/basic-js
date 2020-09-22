const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  return matrix.reduce((sum, row) => sum + row.filter(item => item == '^^').length, 0) 
};
