var startsWith = require('../../string/startswith');

describe('startsWith', function () {
  it('returns true if input starts with given string at given position', function () {
    expect(startsWith('foo', 'oo', 1)).to.be.true;
    expect(startsWith('bar', 'ar', 1)).to.be.true;
  });

  it('returns true if input starts with given string', function () {
    expect(startsWith('foo', 'fo')).to.be.true;
    expect(startsWith('bar', 'ba')).to.be.true;
  });

  it('returns false if input does not start with given string', function () {
    expect(startsWith('foo', 'ba')).to.be.false;
    expect(startsWith('bar', 'fo')).to.be.false;
  });

  it('returns true if input starts with given char', function () {
    expect(startsWith('foo', 'f')).to.be.true;
    expect(startsWith('bar', 'b')).to.be.true;
  });

  it('returns false if input does not start with given char', function () {
    expect(startsWith('foo', 'b')).to.be.false;
    expect(startsWith('bar', 'f')).to.be.false;
  });

  it('returns true if input starts with given char at given position', function () {
    expect(startsWith('bar', 'a', 1)).to.be.true;
  });

  it('returns true if input does not start with given char at given position', function () {
    expect(startsWith('bar', 'b', 1)).to.be.false;
  });
});
