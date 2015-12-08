var trimRight = require('../../string/trimRight');

describe('trimRight', function () {
  it('returns a string', function () {
    expect(trimRight('')).to.be.a('string');
  });

  var testData = [
    { input: 'foo   ', expected: 'foo' },
    { input: 'bar ', expected: 'bar' },
    { input: 'foo bar ', expected: 'foo bar' },
    { input: 'foo\t', expected: 'foo' },
    { input: 'foo\t  ', expected: 'foo' },
    { input: 'bar\t\t', expected: 'bar' },
    { input: '   baz   ', expected: '   baz' },
    { input: '', expected: '' },
    { input: '  ', expected: '' }
  ];
  testData.forEach(function (data) {
    it('returns correct result for ' + data.input, function () {
      expect(trimRight(data.input)).to.equal(data.expected);
    });
  });
});
