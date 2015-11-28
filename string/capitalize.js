/**
Capitalize the first letter of a string.

@module string/capitalize
@param {string} str The string to capitalize.
@returns {string} The string with the first letter capitalized.
@example
var capitalize = require('lildash/string/capitalize');
capitalize('foo');  // => 'Foo'
capitalize('Foo');  // => 'Foo'
capitalize('WOW');  // => 'WOW'
*/
module.exports = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
