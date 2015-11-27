var isEmpty = require('../../array/isEmpty');

describe('isEmpty', function () {
  it('returns true for empty arrays', function () {
    expect(isEmpty([])).to.equal(true);
  });

  it('returns false for non-empty arrays', function () {
    expect(isEmpty([1])).to.equal(false);
    expect(isEmpty([undefined])).to.equal(false);
  });
});
