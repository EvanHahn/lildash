/**
Delay a function for a number of milliseconds. Also lets you pass arguments.

Effectively `setTimeout`.`

@module function/delay
@param {Function} fn The function to delay.
@param {...*} arg Extra arguments to pass to the function.
@example
var delay = require('lildash/function/delay');

delay(function (foo) {
  console.log('this is logged ' + foo + ' later');
}, 1000, 'quite awhile');
*/
module.exports = function (fn, wait) {
  var args = Array.prototype.slice.call(arguments, 2);

  setTimeout(function () {
    fn.apply(this, args);
  }, wait);
};
