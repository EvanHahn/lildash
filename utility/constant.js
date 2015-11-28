/**
Make a function that always returns the same value.

@module utility/constant
@param {*} value Value to return.
@returns {Function} Function that returns `value`.
@example
var constant = require('lildash/utility/constant');

var fn = constant(4);
fn();  // => 4
fn();  // => 4
fn();  // => 4
*/
module.exports = function (value) {
  return function () {
    return value;
  };
};
