const { NotImplementedError } = require('../extensions/index.js');

function isMAC48Address(inputString) {
  const macRegex = /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/;
  return macRegex.test(inputString);
}
module.exports = {
  isMAC48Address
};
