var last = require('./last');

/**
Split an array into equal-sized chunks. If the array can't be split evenly, the final chunk will contain the remaining elements.

@module array/chunk
@param {Array} arr The array to chunk.
@param {number} chunkSize How big each chunk should be.
@returns {Array[]} An array of chunks.
@example
var chunk = require('lildash/array/chunk');
chunk([1, 2, 3, 4, 5], 2);  // => [[1, 2], [3, 4], [5]]
*/
module.exports = function (arr, chunkSize) {
  var i;
  var result = [];

  for (i = 0; i < arr.length; i++) {
    if (!(i % chunkSize)) {
      result.push([]);
    }
    last(result).push(arr[i]);
  }

  return result;
};
