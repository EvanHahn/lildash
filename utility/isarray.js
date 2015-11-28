/**
Is the argument an array?

@module utility/isArray
@param {*} value Value to check.
@returns {bool} Whether the argument is an array.
@example
var isArray = require('lildash/utility/isarray');
isArray([]);      // => true
isArray([1, 2]);  // => true
isArray('wow!');  // => false
*/
module.exports = Array.isArray || function (value) {
  return ({}).toString.call(value) === '[object Array]';
};
