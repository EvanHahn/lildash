/**
Is the argument an Error?

@module utility/isError
@param {*} value Value to check.
@returns {bool} Whether the argument is an Error.
@example
var isError = require('lildash/utility/iserror');
isError(new Error());      // => true
isError(new TypeError());  // => true
isError('wow');            // => false
*/
module.exports = function (value) {
  return value instanceof Error;
};
