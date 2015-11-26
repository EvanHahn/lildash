module.exports = function (fn) {
  var result;
  var called = false;

  return function () {
    if (!called) {
      called = true;
      result = fn.apply(this, arguments);
    }

    return result;
  };
};
