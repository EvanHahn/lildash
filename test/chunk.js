var chunk = require('../chunk');

describe('chunk', function () {
  it('returns an empty array when passed an empty array', function () {
    expect(chunk([], 123)).to.deep.equal([]);
  });
  
  it('splits arrays into chunks', function () {
    expect(chunk(['a', 'b', 'c', 'd', 'e'], 2)).to.deep.equal([
      ['a', 'b'], ['c', 'd'], ['e']
    ]);
  });
});
