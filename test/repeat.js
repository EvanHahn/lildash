var repeat = require('../repeat');

describe('repeat', function () {
  it('repeats the empty string', function () {
    expect(repeat('', 100)).to.equal('');
  });

  it('does nothing when repeating once', function () {
    expect(repeat('foo', 1)).to.equal('foo');
  });

  it('repeats a string', function () {
    expect(repeat('foo', 3)).to.equal('foofoofoo');
  });
});
