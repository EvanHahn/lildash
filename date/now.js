/**
Return the number of milliseconds since the Unix epoch (the first moment of 1970).

@module date/now
@returns {number} The number of milliseconds since the Unix epoch.
@example
var now = require('lildash/date/now');
now();  // => 1448671388273
// ...time passes...
now();  // => 1448671389644
*/
module.exports = function () {
  return new Date().getTime();
};
