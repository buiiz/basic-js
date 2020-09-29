const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  getDict() {
    let dict = "";
    for (let i = 65; i <= 90; i++) {
      dict += String.fromCodePoint(i);
    }
    return dict;
  }

  vigenereCipher(message, key, cipher) {
    if (!message || !key) throw new Error("Input is incorrect");

    key = key.toUpperCase();
    message = message.toUpperCase();
    const dict = this.getDict();
    let res = "";

    let fixedKey = "";
    let index = 0;
    message.split("").forEach((c) => {
      if (dict.includes(c)) {
        if (index == key.length) index -= key.length;
        fixedKey += key[index];
        index++;
      } else {
        fixedKey += " ";
      }
    });

    for (let i = 0; i < message.length; i++) {
      const m = message[i];
      const k = fixedKey[i];
      const mNumber = dict.indexOf(m);
      const kNumber = dict.indexOf(k);

      if (!dict.includes(m)) {
        res += m;
      } else {
        if (cipher == "encrypt") {
          let c = (mNumber + kNumber) % dict.length;
          res += dict[c];
        }
        if (cipher == "decrypt") {
          let c = (mNumber - kNumber + 26) % dict.length;
          res += dict[c];
        }
      }
    }

    return res;
  }

  encrypt(message, key) {
    let encryptedMessage = this.vigenereCipher(message, key, "encrypt");
    if (!this.isDirect) {
      encryptedMessage = encryptedMessage.split("").reverse().join("");
    }
    return encryptedMessage;
  }

  decrypt(message, key) {
    let decryptedMessage = this.vigenereCipher(message, key, "decrypt");
    if (!this.isDirect) {
      decryptedMessage = decryptedMessage.split("").reverse().join("");
    }
    return decryptedMessage;
  }
}

module.exports = VigenereCipheringMachine;
