/**
Dose an object have no keys?

@module object/isEmpty
@param {object} obj The object to check.
@returns {bool} Whether the object is empty.
@example
var isEmpty = require('lildash/object/isempty');
isEmpty({ foo: 123 });  // => false
isEmpty({});            // => true
*/
module.exports = function (obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
};
