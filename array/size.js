/**
Return the `length` of an array.

@module array/size
@param {Array} arr The array to look at.
@returns {number} The length of the array.
@example
var size = require('lildash/array/size');
var arr = [1, 2, 3];
arr.length === size(arr);  // => 3
*/
module.exports = function (arr) {
  return arr.length;
};
