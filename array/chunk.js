var last = require('./last');

module.exports = function (arr, chunkSize) {
  var i;
  var result = [];

  for (i = 0; i < arr.length; i++) {
    if (!(i % chunkSize)) {
      result.push([]);
    }
    last(result).push(arr[i]);
  }

  return result;
};
