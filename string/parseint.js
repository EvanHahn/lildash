/**
Runs `parseInt` with a default radix of 10.

@module string/parseInt
@param {string} str The string to parse.
@param {number} [radix=10] The radix.
@returns {number} The parsed string.
@example
var parseInt = require('lildash/string/parseint');

parseInt('123');     // => 123
parseInt('ugh');     // => NaN

parseInt('123', 8);  // => 83
*/
module.exports = function (str, radix) {
  return parseInt(str, radix || 10);
};
