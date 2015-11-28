/**
Clone a date.

@module date/clone
@param {Date} date The Date object to clone.
@returns {Date} The cloned date.
@example
var clone = require('lildash/date/clone');
var now = new Date();
clone(now) === now;                      // => false
clone(now).getTime() === now.getTime();  // => true
*/
module.exports = function (date) {
  return new Date(date.getTime());
};
