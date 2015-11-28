var map = require('../../array/map');

describe('array/map', function () {
  it('returns an empty array when passed an empty array', function () {
    function yes () {
      return true;
    }

    expect(map([], yes)).to.deep.equal([]);
  });

  it('returns a mapped array', function () {
    function square (n) {
      return n * n;
    }

    expect(map([1, 2, 3], square)).to.deep.equal([1, 4, 9]);
  });

  it('calls the function with the proper arguments', function () {
    var fn = this.sandbox.spy(function () {
      return true;
    });
    var arr = ['a', 'b', 'c'];

    map(arr, fn);

    expect(fn.callCount).to.equal(3);
    expect(fn.getCall(0).args).to.deep.equal(['a', 0, arr]);
    expect(fn.getCall(1).args).to.deep.equal(['b', 1, arr]);
    expect(fn.getCall(2).args).to.deep.equal(['c', 2, arr]);
  });
});
