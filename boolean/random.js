/**
Randomly return `true` or `false`.

@module boolean/random
@returns {bool} `true` or `false`.
@example
var random = require('lildash/boolean/random');
random();  // => false
random();  // => true
random();  // => true
*/
module.exports = function () {
  return Math.random() < 0.5;
};
