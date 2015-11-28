var size = require('../../object/size');

describe('object/size', function () {
  it('returns 0 for an empty object', function () {
    expect(size({})).to.equal(0);
  });

  it('returns the number of keys', function () {
    expect(size({foo: 'bar'})).to.equal(1);
    expect(size({foo: 'bar', baz: 'wow'})).to.equal(2);
  });
});
