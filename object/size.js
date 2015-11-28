/**
Return the number of keys on an object. Does not return inherited properties.

@module object/size
@param {Object} obj The object to look at.
@returns {number} The number of keys on the object.
@example
var size = require('lildash/object/size');
size({foo: 1, bar: 2});  // => 2
size({});                // => 0
*/
module.exports = function (obj) {
  var result = 0;

  for (var key in obj) {
    result += obj.hasOwnProperty(key);
  }

  return result;
};
