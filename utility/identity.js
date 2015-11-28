/**
Return the first argument.

@module utility/identity
@param {*} value Value to return.
@returns {Function} Function that returns `value`.
@example
var identity = require('lildash/utility/identity');
identity(4);      // => 4
identity('foo');  // => 'foo'
*/
module.exports = function (value) {
  return value;
};
