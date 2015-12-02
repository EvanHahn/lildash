/**
Extracts words from str.
@module string/words
@param {string} str The string from which to extract the words.
@param {pattern} [pattern=] The pattern to match the words.
@returns {array} Words that match the pattern.
@example
var words = require('lildash/string/words');
words('foo bar');     // => ['foo', 'bar']
words('foo 1 bar &'); // => ['foo', 'bar']
words('1 2 3'); // => []
words('1 2 3', /\d+/g); // => ['1', '2', '3']
*/
module.exports = function (str, pattern) {
  if (!pattern) {
    pattern = /\w+/g;
  }
  return str.match(pattern) || [];
};
