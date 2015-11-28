var at = require('../../array/at');

describe('array/at', function () {
  it('can return nothing', function () {
    expect(at(['a', 'b', 'c'], [])).to.deep.equal([]);
  });

  it('can extract one value', function () {
    expect(at(['a', 'b', 'c'], [0])).to.deep.equal(['a']);
  });

  it('can extract multiple values', function () {
    expect(at(['a', 'b', 'c'], [0, 2])).to.deep.equal(['a', 'c']);
  });

  it('can extract multiple values, even past the index', function () {
    expect(at(['a', 'b', 'c'], [1, 99])).to.deep.equal(['b', undefined]);
  });

  it('can extract the same value multiple times', function () {
    expect(at(['a', 'b', 'c'], [0, 1, 0])).to.deep.equal(['a', 'b', 'a']);
  });
});
