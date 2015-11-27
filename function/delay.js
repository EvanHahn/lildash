module.exports = function (fn, wait) {
  var args = Array.prototype.slice.call(arguments, 2);

  setTimeout(function () {
    fn.apply(this, args);
  }, wait);
};
