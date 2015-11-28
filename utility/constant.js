/**
Make a function that always returns the same value.

@param {} value Value to return.
@returns {Function} Function that returns `value`.
@example
var constant = require('lildash/utility/constant');

var fn = constant(4);
fn();  // => 4
fn();  // => 4
fn();  // => 4
*/
function constant (value) {
  return function () {
    return value;
  };
}

module.exports = constant;
