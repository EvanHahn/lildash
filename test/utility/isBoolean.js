var isBoolean = require('../../utility/isboolean');

describe('isBoolean', function () {
  it('returns true for booleans', function () {
    expect(isBoolean(true)).to.equal(true);
    expect(isBoolean(false)).to.equal(true);
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
      function () {},
      /foo/,
      new Date(),
      [],
      [1, 2, 3]
    ].forEach(function (value) {
      expect(isBoolean(value)).to.equal(false);
    });

    expect(isBoolean(arguments)).to.equal(false);
  });
});
