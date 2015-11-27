var delay = require('../../function/delay');

describe('function/delay', function () {
  it('breaks the event loop', function (done) {
    var arr = [];

    arr.push(1);

    delay(function (foo) {
      arr.push(foo);

      expect(arr).to.deep.equal([1, 2, 3]);

      done();
    }, 5, 3);

    arr.push(2);
  });

  it('delays invoking a function', function (done) {
    var start = new Date();

    delay(function (arg) {
      var end = new Date();

      expect(end - start).to.be.closeTo(100, 5);
      expect(arg).to.equal('foo');

      done();
    }, 100, 'foo');
  });
});
