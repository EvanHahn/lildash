/**
Wrap a function so that it can only be called once. Always returns the first value that was returned.

@module function/times
@param {number} count How many times should we call the function?
@param {Function} fn The function to call.
@example
var times = require('lildash/function/times');

var counter = 0;

times(10, function (i) {
  console.log('Call number ' + i);
  counter += 1;
});

counter;  // => 10
*/
module.exports = function (count, fn) {
  for (var i = 0; i < count; i++) {
    fn(i);
  }
};
