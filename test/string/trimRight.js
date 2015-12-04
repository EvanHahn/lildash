var trimRight = require('../../string/trimRight');

describe('trimRight', function () {
  it('returns a string', function () {
    expect(trimRight('')).to.be.a('string');
  });

  var testData = [
    { input: 'foo   ', expected: 'foo' },
    { input: 'bar ', expected: 'bar' },
    { input: 'foo bar ', expected: 'foo bar' },
    { input: '   baz   ', expected: '   baz' },
    { input: '', expected: '' },
    { input: '  ', expected: '' },
  ];
  testData.forEach(function(data) {
    it('returns correct result', function () {
      expect(trimRight(data.input)).to.equal(data.expected);
    });
  });
});
