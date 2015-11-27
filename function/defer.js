module.exports = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1);

  setTimeout(function () {
    fn.apply(this, args);
  }, 0);
};
