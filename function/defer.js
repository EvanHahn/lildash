var delay = require('./delay');

/**
Defer a function until the next tick of the event loop. Also lets you pass arguments.

Effectively `setTimeout(fn, 0)`.

@module function/defer
@param {Function} fn The function to defer.
@param {...*} arg Extra arguments to pass to the function.
@example
var defer = require('lildash/function/defer');

defer(function (foo) {
  console.log('this is logged ' + foo);
}, 'second');
console.log('this is logged first');
*/
module.exports = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1);

  delay.apply(this, [fn, 0].concat(args));
};
