/**
Create a function that negates the previous result.

@module function/negate
@param {Function} fn The function to negate.
@returns {Function} A function that always returns the opposite.
@example
var negate = require('lildash/function/negate');

function isEven(n) {
  return n % 2 === 0;
}
isEven(1);  // => false
isEven(2);  // => true

var isOdd = negate(isEven);
isOdd(1);   // => true
isOdd(2);   // => false
*/
module.exports = function (fn) {
  return function () {
    return !fn.apply(this, arguments);
  };
};
