var slice = Array.prototype.slice;

/**
Binds `scope` as the `this` object for the function. Also supports currying.

@module function/bind
@param {Function} fn The function to be bound.
@param {*} scope The `this` in the function.
@param {...*} arg Extra arguments to call the function with.
@returns {Function} The bound function.
@example
var bind = require('lildash/function/bind');

bind(function () {
  return this;
}, 123)();              // => 123

bind(function (a, b) {
  return this + a + b;
}, 1, 2)(3);            // => 6
*/
module.exports = function (fn, scope) {
  var args = slice.call(arguments, 2);

  return function () {
    return fn.apply(scope, args.concat(slice.call(arguments)));
  };
};
