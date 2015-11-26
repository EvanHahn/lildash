module.exports = function (str, amount) {
  var i;
  var result = str;

  for (i = 1; i < amount; i++) {
    result += str;
  }

  return result;
};
