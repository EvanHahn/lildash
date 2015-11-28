/**
Create a new array where `fn` is applied to all elements in the array.

@module array/map
@param {Array} arr The array to iterate over.
@param {Function} fn The function to apply to every element.
@returns {Array} The mapped array.
@example
var map = require('lildash/array/map');

function square(n) {
  return n * n;
}
map([1, 2, 3], square);  // => [1, 4, 9]
*/
function nativeMap (arr, fn) {
  return arr.map(fn);
}

function otherMap (arr, fn) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i, arr));
  }

  return result;
}

module.exports = Array.prototype.map ? nativeMap : otherMap;
