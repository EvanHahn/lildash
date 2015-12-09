/**
Generate a random integer between the two arguments.

@module number/random
@param {number} lowerBound The lowest number this could possibly return.
@param {number} upperBound The highest number this could possibly return.
@example
var random = require('lildash/number/random');
random(1, 10); // => 9
random(1, 10); // => 7
random(1, 10); // => 1
random(1, 10); // => 10
*/
module.exports = function (lowerBound, upperBound) {
  var range = upperBound - lowerBound;

  return Math.round(Math.random() * range) + lowerBound;
};
