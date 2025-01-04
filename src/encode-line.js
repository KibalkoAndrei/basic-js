const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  str = str.split('');
  let lineEncode = ''

  for (let i = 0; i < str.length; i++) {

    let sumSumbol = 1;

    while (i + 1 < str.length && str[i] === str[i + 1]) {
      sumSumbol++;
      i++;
    }
  
    if (sumSumbol > 1) {
      lineEncode += `${sumSumbol}${str[i]}`;
    } else {
      lineEncode += str[i];
    }
  }
  return lineEncode;
}

module.exports = {
  encodeLine
};
