/**
Does a string start with another string?

@module string/startsWith
@param {string} str The string to search through.
@param {string} query The string to find in `str`.
@param {number} [position=0] The index to start the search. Defaults to the beginning of the string.
@returns {bool} Does the string start with another string?
@example
var startsWith = require('lildash/string/startswith');
startsWith('food', 'foo');   // => true
startsWith('cake', 'foo');   // => false
startsWith('cake', 'k');     // => false
startsWith('cake', 'k', 2);  // => true
*/
module.exports = function (str, query, position) {
  return str.substr(position, query.length) === query;
};
