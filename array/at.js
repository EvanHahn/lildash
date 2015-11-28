/**
Split an array into equal-sized ats. If the array can't be split evenly, the final at will contain the remaining elements.

@module array/at
@param {Array} arr The array to iterate over.
@param {number[]} indexes An array of indexes to take.
@returns {Array[]} A smaller array.
@example
var at = require('lildash/array/at');
at(['a', 'b', 'c'], [0]);        // => ['a']
at(['a', 'b', 'c'], [0, 2]);     // => ['a', 'c']
at(['a', 'b', 'c'], [1, 99]);    // => ['b', undefined]
at(['a', 'b', 'c'], [0, 1, 0]);  // => ['a', 'b', 'a']
at(['a', 'b', 'c'], []);         // => []
*/
var map = require('./map');

module.exports = function (arr, indexes) {
  return map(indexes, function (index) {
    return arr[index];
  });
};
