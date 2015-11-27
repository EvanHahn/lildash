var path = require('path');

describe('aliases', function () {
  [
    ['array/isempty', 'string/isempty']
  ].forEach(function (pair) {
    var a = pair[0];
    var b = pair[1];

    it(a + ' and ' + b, function () {
      var aPath = path.resolve(__dirname, '..', a);
      var bPath = path.resolve(__dirname, '..', b);
      expect(require(aPath)).to.equal(require(bPath));
    });
  });
});
