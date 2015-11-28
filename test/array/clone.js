var clone = require('../../array/clone');

describe('array/clone', function () {
  it('clones an empty array', function () {
    var arr = [];

    expect(clone(arr)).not.to.equal(arr);
    expect(clone(arr)).to.deep.equal([]);
  });

  it('clones an array', function () {
    var arr = [1, 2, 3];

    expect(clone(arr)).not.to.equal(arr);
    expect(clone(arr)).to.deep.equal([1, 2, 3]);
  });

  it('does a shallow clone', function () {
    var obj = {};
    var arr = [1, obj, 3];

    expect(clone(arr)[1]).to.equal(obj);
  });
});
