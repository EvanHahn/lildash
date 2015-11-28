/**
Is the argument a boolean?

@module utility/isBoolean
@param {*} value Value to check.
@returns {bool} Whether the argument is a boolean.
@example
var isBoolean = require('lildash/utility/isboolean');
isBoolean(true);               // => true
isBoolean(false);              // => true
isBoolean('wow');              // => false
isBoolean(new Boolean(true));  // => false
*/
module.exports = function (value) {
  return (value === true) || (value === false);
};
