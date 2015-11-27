var clone = require('../../date/clone');

describe('clone', function () {
  it('returns a different object', function () {
    var d = new Date();

    expect(clone(d)).not.to.equal(d);
  });

  it('returns an object with the same time', function () {
    var d = new Date();
    var cloned = clone(d);

    expect(d.getTime()).to.equal(cloned.getTime());
  });
});
