var defer = require('../../function/defer');

describe('function/defer', function () {
  it('defers invoking a function', function (done) {
    var arr = [];

    arr.push(1);

    defer(function (foo) {
      arr.push(foo);

      expect(arr).to.deep.equal([1, 2, 3]);

      done();
    }, 3);

    arr.push(2);
  });
});
