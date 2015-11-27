var isEmpty = require('../../object/isEmpty');

describe('isEmpty', function () {
  it('returns true for empty objects', function () {
    expect(isEmpty({})).to.equal(true);
  });

  it('returns true for empty objects that inherit from non-empty ones', function () {
    function Klass () {}
    Klass.prototype.foo = function () {};

    var obj = new Klass();

    expect(isEmpty(obj)).to.equal(true);
  });

  it('returns false for non-empty objects', function () {
    expect(isEmpty({foo: 'bar'})).to.equal(false);
  });
});
