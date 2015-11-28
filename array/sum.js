var reduce = require('./reduce');

/**
Sum an array of numbers.

@module array/sum
@param {number[]} arr The array to sum.
@returns {number} The sum of the array.
@example
var sum = require('lildash/array/sum');

sum([1, 2, 3, 4]);  // => 10
*/
module.exports = function (arr) {
  return reduce(arr, function (total, n) {
    return total + n;
  }, 0);
};
