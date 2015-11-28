var undef;

/**
Is the argument `undefined`?

@module utility/isUndefined
@param {*} value Value to check.
@returns {bool} Whether the argument is `undefined`.
@example
var isUndefined = require('lildash/utility/isundefined');
isUndefined();           // => true
isUndefined(undefined);  // => true
isUndefined('wow!');     // => false
isUndefined(null);       // => false
*/
module.exports = function (value) {
  return value === undef;
};
