/**
Is a number finite?

@module number/isfinite
@param {number} num The number to check.
@returns {bool} Is `num` positive or negative `Infinity`?
@example
var isFinite = require('lildash/number/isfinite');
isFinite(123);     // => true
isFinite(1 / 0);   // => false
isFinite(-1 / 0);  // => false
*/
var inf = 1 / 0;

module.exports = function (num) {
  return num !== inf && num !== -inf;
};
