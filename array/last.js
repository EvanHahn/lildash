/**
Return the last element in an array. Returns `undefined` if given an empty array.

@module array/last
@param {Array} arr The array to extract from.
@returns {*} The last element.
@example
var last = require('lildash/array/last');
last([1, 2, 3]);  // => 3
last([]);         // => undefined
*/
module.exports = function (value) {
  return value[value.length - 1];
};
