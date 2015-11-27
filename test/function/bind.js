var bind = require('../../function/bind');

describe('bind', function () {
  it('sets the scope and arguments', function () {
    var obj = {};

    var result = bind(function (a, b, c) {
      expect(this).to.equal(obj);
      expect(a).to.equal(1);
      expect(b).to.equal(2);
      expect(c).to.equal(3);

      return 4;
    }, obj, 1, 2)(3);

    expect(result).to.equal(4);
  });
});
