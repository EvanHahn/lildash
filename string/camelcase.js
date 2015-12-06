/**
Transform a string to be `camelCased`.

@module string/camelCase
@param {string} str The string to transform.
@returns {string} The camelCased string.
@example
var camelCase = require('lildash/string/camelcase');
camelCase('foo');          // => 'foo'
camelCase('Foo bar');      // => 'fooBar'
camelCase('__foo_bar__');  // => 'fooBar'
*/

var parseWords = require('./words');
var capitalize = require('./capitalize');

module.exports = function (str) {
  var words = parseWords(str, /[a-zA-Z0-9]+/g);
  words = words.map(capitalize);

  var firstWord = words.shift();
  if (firstWord) {
    words.unshift(firstWord.toLowerCase());
  }

  return words.join('');
};
