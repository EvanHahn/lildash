/**
Do a shallow clone of an array.

@module array/clone
@param {Array} arr The array to clone.
@returns {Array} A cloned array.
@example
var clone = require('lildash/array/clone');

var original = [1, 2, {foo: 'bar'}];
var cloned = clone(original);
cloned;                     // [1, 2, {foo: 'bar'}]
cloned === original;        // => false
cloned[2] === original[2];  // => true
*/
module.exports = function (arr) {
  return arr.concat();
};
