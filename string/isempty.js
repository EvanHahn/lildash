/**
Is a string empty?

@module string/isEmpty
@param {string} str The string to check.
@returns {bool} Whether the string is empty.
@example
var isEmpty = require('lildash/string/isempty');
isEmpty('foo');  // => false
isEmpty('');     // => true
*/
module.exports = require('../array/isempty');
