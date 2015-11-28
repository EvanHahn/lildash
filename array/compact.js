/**
Remove all falsy values from an array. In JavaScript, falsy values are `false`, `0`, `null`, `undefined`, `NaN`, and the empty string.

@module array/compact
@param {Array} arr The array to compact.
@returns {Array} The array with falsy values removed.
@example
var compact = require('lildash/array/compact');
chunk([1, 2, 0, undefined, 3]);  // => [1, 2, 3]
*/
module.exports = function (arr) {
  return arr.filter(function (value) {
    return value;
  });
};
