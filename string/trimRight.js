/**
Removes trailing chars from the right end of a string.

@module string/trimRight
@param {string} str The string to remove trailing chars from.
@param {string} [chars=' '] The chars to remove.
@returns {string} The given string without trailing chars.
@example
var trimRight = require('lildash/string/trimRight');
trimRight('foo  ');  // => 'foo'
trimRight('_foo_', '_');  // => '_foo'
trimRight('!--foo--!', '!-');  // => '!--foo'
*/
module.exports = function (str, chars) {
  chars = chars || ' ';
  var pattern = new RegExp('([' + chars + ']*$)', 'g');

  return str.replace(pattern, '');
};
