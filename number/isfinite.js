/**
Is a number finite?

@module number/isfinite
@param {Number} num The number to check.
@returns {bool} Is `num` positive or negative `Infinity`?
@example
var isFinite = require('lildash/object/isfinite');
isFinite(123);     // => true
isFinite(1 / 0);   // => false
isFinite(-1 / 0);  // => false
*/
module.exports = function (num) {
  return num !== Infinity && num !== -Infinity;
};
