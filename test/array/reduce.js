var reduce = require('../../array/reduce');

describe('array/reduce', function () {
  it('returns undefined when passed an empty array', function () {
    function noop () {}

    expect(reduce([], noop)).to.equal(undefined);
  });

  it('returns a value when passed an empty array with an accumulator', function () {
    function noop () {}

    expect(reduce([], noop, 10)).to.equal(10);
  });

  it('can reduce an array with no accumulator', function () {
    expect(reduce([1, 2, 3, 4, 5], function (total, n) {
      return total + n;
    })).to.equal(15);
  });

  it('can reduce an array with an accumulator', function () {
    expect(reduce([1, 2, 3, 4, 5], function (total, n) {
      return total + n;
    }, 10)).to.equal(25);
  });

  it('calls the function with the proper arguments when called with no accumulator', function () {
    var fn = this.sandbox.spy(function (total, n) {
      return total + n;
    });
    var arr = [1, 2, 3];

    reduce(arr, fn);

    expect(fn.callCount).to.equal(2);
    expect(fn.getCall(0).args).to.deep.equal([1, 2, 1, arr]);
    expect(fn.getCall(1).args).to.deep.equal([3, 3, 2, arr]);
  });

  // TODO: ^ with accum
});
