/**
Wrap a function so that it can only be called once. Always returns the first value that was returned.

@module function/once
@param {Function} fn The function to wrap.
@returns {Function} A function that can only be called once.
@example
var once = require('lildash/function/once');

var counter = 0;
var addToCounter = once(function (amount) {
  counter += amount;
});

addToCounter(12);
addToCounter(88);
addToCounter(400);
addToCounter(5);

counter;  // => 12
*/
module.exports = function (fn) {
  var result;
  var called = false;

  return function () {
    if (!called) {
      called = true;
      result = fn.apply(this, arguments);
    }

    return result;
  };
};
