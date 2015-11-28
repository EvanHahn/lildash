/**
Is the argument `NaN`? Note that this is different from the built-in `isNaN` function.

@module utility/isNaN
@param {*} value Value to check.
@returns {bool} Whether the argument is `NaN`.
@example
var isNaN = require('lildash/utility/isnan');
isNaN(0 / 0);            // => true
isNaN(parseInt('ugh'));  // => true
isNaN(123);              // => false
isNaN('wow');            // => false
*/
module.exports = function (v) {
  return v !== v;  // eslint-disable-line
};
