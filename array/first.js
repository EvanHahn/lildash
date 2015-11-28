/**
Return the first element in an array. Returns `undefined` if given an empty array.

@module array/first
@param {Array} arr The array to extract from.
@returns {*} The first element.
@example
var first = require('lildash/array/first');
first([1, 2, 3]);  // => 1
first([]);         // => undefined
*/
module.exports = function (value) {
  return value[0];
};
