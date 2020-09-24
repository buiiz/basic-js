const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(diskNumber, turnsSpeed) {
  function calcTurns(discs) {
    if (!discs) return 0;
    return 2 * calcTurns(discs - 1) + 1;
  }

  let turns = calcTurns(diskNumber);
  let seconds = Math.floor((turns * 3600) / turnsSpeed);

  return { turns, seconds };
};
