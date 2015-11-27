var isnan = require('../../utility/isnan');

describe('isNaN', function () {
  it('returns true for NaN', function () {
    expect(isnan(0 / 0)).to.be.true;
  });

  it('returns false for everything else', function () {
    [
      0,
      -0,
      1,
      -1,
      1.2,
      -1.2,
      1 / 0,
      -1 / 0,
      '',
      ' ',
      'hello',
      {},
      {foo: []},
      {0: 'foo', length: 1},
      undefined,
      null,
      true,
      false,
      function () {},
      /foo/,
      new Date()
    ].forEach(function (value) {
      expect(isnan(value)).to.equal(false);
    });

    expect(isnan(arguments)).to.equal(false);
  });
});
