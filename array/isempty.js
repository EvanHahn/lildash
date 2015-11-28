/**
Is an array empty?

@module array/isEmpty
@param {Array} arr The string to check.
@returns {bool} Whether the array is empty.
@example
var isEmpty = require('lildash/array/isempty');
isEmpty([1, 2, 3]);  // => false
isEmpty([]);         // => true
*/
module.exports = function (arr) {
  return !arr.length;
};
