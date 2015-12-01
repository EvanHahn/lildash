/**
Does a string end with another string?

@module string/endsWith
@param {string} str The string to search through.
@param {string} query The string to find in `str`.
@param {number} [position=0] The index to end the search. Defaults to the end of the string.
@returns {bool} Does the string end with another string?
@example
var endsWith = require('lildash/string/endsWith');
endsWith('food', 'ood');   // => true
endsWith('cake', 'ood');   // => false
endsWith('cake', 'k');     // => false
endsWith('cake', 'k', 3);  // => true
*/
module.exports = function (str, query, position) {
  position = position || str.length;
  position -= query.length;
  return position >= 0 && str.indexOf(query, position) === position;
};
