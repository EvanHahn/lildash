var isFinite = require('../../number/isfinite');

describe('isFinite', function () {
  it('returns true for finite numbers', function () {
    expect(isFinite(0)).to.equal(true);
    expect(isFinite(-0)).to.equal(true);
    expect(isFinite(1)).to.equal(true);
    expect(isFinite(-1)).to.equal(true);
    expect(isFinite(1.2)).to.equal(true);
    expect(isFinite(-1.2)).to.equal(true);
  });

  it('returns false for positive infinity', function () {
    expect(isFinite(Infinity)).to.equal(false);
    expect(isFinite(1 / 0)).to.equal(false);
  });

  it('returns false for negative infinity', function () {
    expect(isFinite(-Infinity)).to.equal(false);
    expect(isFinite(-1 / 0)).to.equal(false);
  });
});
