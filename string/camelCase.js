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
