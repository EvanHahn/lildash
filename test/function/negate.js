var negate = require('../../function/negate');

describe('negate', function () {
  it('inverts a function', function () {
    var negated = negate(function (n) {
      return n % 2 === 0;
    });

    expect([1, 2, 3, 4, 5].map(negated)).to.deep.equal([
      true, false, true, false, true
    ]);
  });
});
