module.exports = function (count, fn) {
  for (var i = 0; i < count; i++) {
    fn(i);
  }
};
