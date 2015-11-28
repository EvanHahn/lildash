/**
Turns an array into a single value by applying a function to every element in the array. If no accumulator is defined, it uses the first element in the array.

@module array/reduce
@param {Array} arr The array to reduce on.
@param {Function} fn The function, which is called with (accumulator, value, index, array).
@param {*} [accumulator] The initial value.
@returns {*} The reduced "total".
@example
var reduce = require('lildash/array/reduce');

reduce([1, 2, 3, 4], function (total, n) {  // => 10
  return total + n;
});

reduce([1, 2, 3, 4], function (total, n) {  // => 20
  return total + n;
}, 10);
*/
var isEmpty = require('./isempty');
var isUndefined = require('../utility/isundefined');

function nativeReduce (arr, fn, accumulator) {
  if (isEmpty(arr)) {
    return accumulator;
  }

  if (isUndefined(accumulator)) {
    return arr.reduce(fn);
  } else {
    return arr.reduce(fn, accumulator);
  }
}

function otherReduce (arr, fn, accumulator) {
  var i;

  if (isUndefined(accumulator)) {
    accumulator = arr[0];
    i = 1;
  } else {
    i = 0;
  }

  for (; i < arr.length; i++) {
    accumulator = fn(accumulator, arr[i], i, arr);
  }

  return accumulator;
}

module.exports = Array.prototype.reduce ? nativeReduce : otherReduce;
