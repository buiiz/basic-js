const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArr: [],

  addLink(value = "") {
    this.chainArr.push(value);
    return this;
  },

  removeLink(position) {
    if (
      !Number.isInteger(position) ||
      position < 1 ||
      position > this.chainArr.length
    ) {
      this.chainArr = [];
      throw new Error();
    }

    this.chainArr.splice(position - 1, 1);

    return this;
  },

  reverseChain() {
    this.chainArr.reverse();
    return this;
  },

  getLength() {
    return this.chainArr.length;
  },

  finishChain() {
    let chain = this.chainArr.map((link) => `( ${link} )`).join("~~");
    this.chainArr = [];
    return chain;
  },
};

module.exports = chainMaker;
