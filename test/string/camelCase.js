var camelCase = require('../../string/camelCase');

describe('camelCase', function () {
  it('returns a string', function () {
    expect(camelCase('foo bar')).to.be.a('string');
  });

  var testData = [
    { input: 'foo bar', expected: 'fooBar' },
    { input: 'Foo bar', expected: 'fooBar' },
    { input: 'bar-foo', expected: 'barFoo' },
    { input: 'foo boo 1', expected: 'fooBoo1' },
    { input: '__foo_bar__', expected: 'fooBar' },
    { input: '', expected: '' },
    { input: '--', expected: '' }
  ];
  testData.forEach(function (data) {
    it('returns correct result', function () {
      expect(camelCase(data.input)).to.eql(data.expected);
    });
  });
});
