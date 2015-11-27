var constant = require('../../utility/constant');

describe('utility/constant', function () {
  it('returns a value', function () {
    var obj = {};
    var fn = constant(obj);

    expect(fn()).to.equal(obj);
  });
});
