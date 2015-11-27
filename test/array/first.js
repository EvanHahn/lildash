var first = require('../../array/first');

describe('first', function () {
  it('returns the first element if there is one', function () {
    expect(first(['foo'])).to.equal('foo');
  });
  
  it('returns undefined when passed an empty array', function () {
    expect(first([])).to.equal(undefined);
  });
});