var words = require('../../string/words');

describe('words', function () {
  it('returns an array', function () {
    expect(words('foo bar')).to.be.an('array');
  });

  var testData = [
    { input: 'foo bar', expected: ['foo', 'bar'] },
    { input: 'Foo bar', expected: ['Foo', 'bar'] },
    { input: 'foo & bar', expected: ['foo', 'bar'] },
    { input: 'foo bar baz', expected: ['foo', 'bar', 'baz'] }
  ];
  testData.forEach(function (data) {
    it('returns correct result', function () {
      expect(words(data.input)).to.eql(data.expected);
    });
  });

  it('returns empty array if no words found', function () {
    expect(words('')).to.be.empty;
  });

  it('with custom pattern, returns empty array if no words found', function () {
    var actual = words('foo bar', /\d+/g);
    expect(actual).to.be.empty;
  });

  it('with custom pattern, returns correct result', function () {
    var actual = words('foo 1 bar 2', /\d+/g);
    expect(actual).to.eql(['1', '2']);
  });
});
