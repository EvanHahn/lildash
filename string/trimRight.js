/**
Removes trailing chars from the right end of a string.

@module string/trimRight
@param {string} str The string to remove trailing chars from.
@returns {string} The given string without trailing chars.
@example
var trimRight = require('lildash/string/trimRight');
trimRight('foo  ');  // => 'foo'
trimRight('bar\t');  // => 'bar'
trimRight('foo\t  ');  // => 'foo'
*/
module.exports = function (str, chars) {
  return str.replace(/\s*$/g, '');
};
