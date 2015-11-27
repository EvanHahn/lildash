var isError = require('../../utility/iserror');

describe('isError', function () {
  it('returns true for Errors', function () {
    expect(isError(new Error())).to.equal(true);
    expect(isError(new EvalError())).to.equal(true);
    expect(isError(new RangeError())).to.equal(true);
    expect(isError(new ReferenceError())).to.equal(true);
    expect(isError(new SyntaxError())).to.equal(true);
    expect(isError(new TypeError())).to.equal(true);
    expect(isError(new URIError())).to.equal(true);
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
      new Date(),
      [],
      [1, 2, 3]
    ].forEach(function (value) {
      expect(isError(value)).to.equal(false);
    });

    expect(isError(arguments)).to.equal(false);
  });
});
