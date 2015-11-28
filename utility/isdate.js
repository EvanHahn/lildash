/**
Is the argument a Date?

@module utility/isDate
@param {*} value Value to check.
@returns {bool} Whether the argument is a Date.
@example
var isDate = require('lildash/utility/isdate');
isDate(new Date());  // => true
isDate('wow');       // => false
*/
module.exports = function (value) {
  return value instanceof Date;
};
