var filter = require('../../array/filter');

describe('array/filter', function () {
  it('returns an empty array when passed an empty array', function () {
    function yes () {
      return true;
    }

    expect(filter([], yes)).to.deep.equal([]);
  });

  it('returns a filtered array', function () {
    function isEven (n) {
      return n % 2 === 0;
    }

    expect(filter([1, 2, 3, 4, 5], isEven)).to.deep.equal([2, 4]);
  });

  it('calls the function with the proper arguments', function () {
    var fn = this.sandbox.spy(function () {
      return true;
    });
    var arr = ['a', 'b', 'c'];

    filter(arr, fn);

    expect(fn.callCount).to.equal(3);
    expect(fn.getCall(0).args).to.deep.equal(['a', 0, arr]);
    expect(fn.getCall(1).args).to.deep.equal(['b', 1, arr]);
    expect(fn.getCall(2).args).to.deep.equal(['c', 2, arr]);
  });
});
