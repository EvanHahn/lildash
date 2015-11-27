var slice = Array.prototype.slice;

module.exports = function (fn, scope) {
  var args = slice.call(arguments, 2);

  return function () {
    return fn.apply(scope, args.concat(slice.call(arguments)));
  };
};
