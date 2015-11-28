var parse = require('../../string/parseint');

describe('string/parseInt', function () {
  it('returns the same as parseInt(x, 10)', function () {
    [
      '',
      ' ',
      'foo',
      '1f',
      'f',
      'foo',
      'ff',
      '1.6',
      '123',
      'Infinity'
    ].forEach(function (str) {
      var lilParsed = parse(str);
      var realParsed = parseInt(str, 10);
      if (isNaN(lilParsed)) {
        expect(isNaN(realParsed)).to.equal(true);
      } else {
        expect(lilParsed).to.equal(realParsed);
      }
    });
  });

  it('can specify the radix', function () {
    [
      '',
      ' ',
      'foo',
      '1f',
      'f',
      'foo',
      'ff',
      '1.6',
      '123',
      'Infinity'
    ].forEach(function (str) {
      for (var i = 1; i <= 16; i++) {
        var lilParsed = parse(str, i);
        var realParsed = parseInt(str, i);
        if (isNaN(lilParsed)) {
          expect(isNaN(realParsed)).to.equal(true);
        } else {
          expect(lilParsed).to.equal(realParsed);
        }
      }
    });
  });
});
