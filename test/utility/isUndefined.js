var isUndefined = require('../../utility/isundefined');

describe('isUndefined', function () {
  it('returns true if passed no arguments', function () {
    expect(isUndefined()).to.equal(true);
  });

  it('returns true for undefined', function () {
    expect(isUndefined(undefined)).to.equal(true);
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
      {Undefined: []},
      {0: 'Undefined', length: 1},
      null,
      true,
      false,
      function () {},
      /Undefined/,
      new Date(),
      [],
      [1, 2, 3]
    ].forEach(function (value) {
      expect(isUndefined(value)).to.equal(false);
    });

    expect(isUndefined(arguments)).to.equal(false);
  });
});
