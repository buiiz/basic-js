const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();

  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        newArr.push(undefined);
        i += 1;
        break;

      case "--discard-prev":
        newArr.pop();
        break;

      case "--double-next":
        if (i <= arr.length - 2) newArr.push(arr[i + 1]);
        break;

      case "--double-prev":
        if (i >= 1) newArr.push(newArr[newArr.length - 1]);
        break;

      default:
        newArr.push(arr[i]);
    }
  }

  return newArr.filter((item) => item !== undefined);
};
