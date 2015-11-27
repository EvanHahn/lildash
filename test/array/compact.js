var compact = require('../../array/compact');

describe('compact', function () {
  it('returns an empty array when passed an empty array', function () {
    expect(compact([])).to.deep.equal([]);
  });
  
  it('keeps the original array intact', function () {
    var arr = [0, 1, 2];
    expect(compact(arr)).not.to.equal(arr);
    expect(arr).to.deep.equal([0, 1, 2]);
  });
  
  it('returns the array with falsy values removed', function () {
    var arr = [
      'foo',
      '',
      false,
      true,
      10,
      0,
      -0,
      undefined,
      1,
      null,
      2,
      0 / 0,
      3
    ];
    expect(compact(arr)).to.deep.equal([
      'foo',
      true,
      10,
      1,
      2,
      3
    ]);
  });
});
