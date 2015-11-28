/**
Repeat a string.

@module string/repeat
@param {string} str The string to repeat.
@param {amount} times How many times to repeat the string.
@returns {string} The repeated string.
@example
var repeat = require('lildash/string/repeat');
repeat('foo', 3);  // => 'foofoofoo'
*/
module.exports = function (str, amount) {
  var i;
  var result = '';

  for (i = 0; i < amount; i++) {
    result += str;
  }

  return result;
};
