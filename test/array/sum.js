var sum = require('../../array/sum');

describe('array/sum', function () {
  it('returns 0 for an empty array', function () {
    expect(sum([])).to.equal(0);
  });

  it('returns the one element in a one-element array', function () {
    expect(sum([123])).to.equal(123);
  });

  it('returns the sum of an array', function () {
    expect(sum([1, 2, 3, 4, 5, 6])).to.equal(21);
  });
});
