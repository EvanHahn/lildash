var repeat = require('../../string/repeat');

describe('repeat', function () {
  it('repeats the empty string', function () {
    expect(repeat('', 100)).to.equal('');
  });

  it('can repeat a string 0 times', function () {
    expect(repeat('foo', 0)).to.equal('');
  });

  it('does nothing when repeating once', function () {
    expect(repeat('foo', 1)).to.equal('foo');
  });

  it('repeats a string', function () {
    expect(repeat('foo', 3)).to.equal('foofoofoo');
  });
});
