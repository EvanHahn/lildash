var delay = require('./delay');

module.exports = function (fn) {
  var args = Array.prototype.slice.call(arguments, 1);

  delay.apply(this, [fn, 0].concat(args));
};
