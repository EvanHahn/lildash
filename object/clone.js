/**
Do a shallow clone of an object.

@module object/clone
@param {object} obj The object to clone.
@returns {object} A cloned object.
@example
var clone = require('lildash/object/clone');

var original = {
  foo: 'bar',
  baz: {
    wow: 123
  }
};
var cloned = clone(original);
cloned;                       // => {foo: 'bar', baz: {wow: 123}}
cloned === original;          // => false
cloned.baz === original.baz;  // => true
*/
var assign = require('./assign');

module.exports = function (obj) {
  return assign({}, obj);
};
