/**
Merges objects. Uses `Object.assign` if available.

@module object/assign
@param {Object} destination What object should get all of these attributes?
@param {...Object} source These objects are merged into `destination`.
@returns {Object} `destination` with everything else merged in.
@example
var assign = require('lildash/object/assign');

assign({ foo: 123 }, { bar: 456 });  // => { foo: 123, bar: 456 }
*/
module.exports = Object.assign || function (destination) {
  var i, source, key;

  for (i = 1; i < arguments.length; i++) {
    source = arguments[i];
    for (key in source) {
      if (source.hasOwnProperty(key)) {
        destination[key] = source[key];
      }
    }
  }

  return destination;
};
