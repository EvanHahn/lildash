var isDate = require('../../utility/isdate');

describe('isDate', function () {
  it('returns true for Date objects', function () {
    expect(isDate(new Date())).to.equal(true);
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
      [],
      [1, 2, 3]
    ].forEach(function (value) {
      expect(isDate(value)).to.equal(false);
    });

    expect(isDate(arguments)).to.equal(false);
  });
});
