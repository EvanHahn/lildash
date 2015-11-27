var capitalize = require('../../string/capitalize');

describe('capitalize', function () {
  it('returns word with first letter capitalized', function () {
    expect(capitalize('foo')).to.equal('Foo');
    expect(capitalize('bar')).to.equal('Bar');
  });

  it('returns sentence with first letter capitalized', function () {
    expect(capitalize('foo bar qux.')).to.equal('Foo bar qux.');
  });

  it('returns unmodified string if first letter is already capital', function () {
    expect(capitalize('Foo')).to.equal('Foo');
  });
});
