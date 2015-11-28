/**
Create a new array for which all of the elements return true for the passed function.

@module array/filter
@param {Array} arr The array to extract from.
@param {Function} fn The predicate function.
@returns {Array} The filtered array.
@example
var filter = require('lildash/array/filter');

function isEven(n) {
  return n % 2 === 0;
}
filter([1, 2, 3, 4, 5], isEven);  // => [2, 4]
*/
function nativeFilter (arr, fn) {
  return arr.filter(fn);
}

function otherFilter (arr, fn) {
  var element;
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    element = arr[i];
    if (fn(element, i, arr)) {
      result.push(element);
    }
  }

  return result;
}

module.exports = Array.prototype.filter ? nativeFilter : otherFilter;
