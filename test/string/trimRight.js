var trimRight = require('../../string/trimRight');

describe('trimRight', function () {
  it('returns a string', function () {
    expect(trimRight('')).to.be.a('string');
  });

  [
    { input: 'foo   ', expected: 'foo' },
    { input: 'bar ', expected: 'bar' },
    { input: 'foo bar ', expected: 'foo bar' },
    { input: '   baz   ', expected: '   baz' },
    { input: '', expected: '' },
    { input: '  ', expected: '' }
  ].forEach(function (data) {
    it('returns correct result', function () {
      expect(trimRight(data.input)).to.equal(data.expected);
    });
  });

  [
    { input: 'foo0', chars: '0', expected: 'foo' },
    { input: 'bar', chars: '', expected: 'bar' },
    { input: '', chars: '', expected: '' },
    { input: 'bar123', chars: '2', expected: 'bar123' },
    { input: '-_-abc-_-', chars: '_-', expected: '-_-abc' }
  ].forEach(function (data) {
    it('with chars returns correct result', function () {
      expect(trimRight(data.input, data.chars)).to.equal(data.expected);
    });
  });
});
