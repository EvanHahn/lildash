var isArray = require('../../utility/isarray');

describe('isArray', function () {
  it('returns true for arrays', function () {
    expect(isArray([])).to.be.true;
    expect(isArray([1, 2, 3])).to.be.true;
  });

  it('returns false for everything else', function () {
    [
      0,
      -0,
      1,
      -1,
      1.2,
      -1.2,
      0 / 0,
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
      expect(isArray(value)).to.equal(false);
    });

    expect(isArray(arguments)).to.equal(false);
  });
});
