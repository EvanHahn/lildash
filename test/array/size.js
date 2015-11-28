var size = require('../../array/size');

describe('array/size', function () {
  it('returns 0 for an empty array', function () {
    expect(size([])).to.equal(0);
  });

  it('returns the size of an array', function () {
    expect(size([1, 2, 3])).to.equal(3);
  });
});
