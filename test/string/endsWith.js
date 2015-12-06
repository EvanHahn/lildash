
var endsWith = require('../../string/endswith');

describe('endsWith', function () {
  it('returns true if input ends with given string', function () {
    expect(endsWith('foo', 'oo')).to.be.true;
    expect(endsWith('bar', 'ar')).to.be.true;
  });

  it('returns false if input does not end with given string', function () {
    expect(endsWith('foo', 'fo')).to.be.false;
    expect(endsWith('bar', 'ba')).to.be.false;
  });

  it('returns true if input ends with given char', function () {
    expect(endsWith('foo', 'o')).to.be.true;
    expect(endsWith('bar', 'r')).to.be.true;
  });

  it('returns false if input does not end with given char', function () {
    expect(endsWith('foo', 'b')).to.be.false;
    expect(endsWith('bar', 'f')).to.be.false;
  });

  it('returns true if input ends with given char at given position', function () {
    expect(endsWith('bar', 'b', 1)).to.be.true;
    expect(endsWith('bar', 'a', 2)).to.be.true;
    expect(endsWith('bar', 'r', 3)).to.be.true;
    expect(endsWith('cheese', 'h', 2)).to.be.true;
    expect(endsWith('cake', 'k', 3)).to.be.true;
  });

  it('returns false if input does not end with given char at given position', function () {
    expect(endsWith('bar', 'a', 1)).to.be.false;
    expect(endsWith('cheese', 'e', 2)).to.be.false;
  });
});
