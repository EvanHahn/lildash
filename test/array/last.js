var last = require('../../array/last');

describe('last', function () {
  it('returns the last element if there is one', function () {
    expect(last(['foo'])).to.equal('foo');
  });

  it('returns undefined when passed an empty array', function () {
    expect(last([])).to.equal(undefined);
  });
});
