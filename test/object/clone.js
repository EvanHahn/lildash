var clone = require('../../object/clone');

describe('object/clone', function () {
  it('clones an empty object', function () {
    var obj = {};

    expect(clone(obj)).not.to.equal(obj);
    expect(clone(obj)).to.deep.equal({});
  });

  it('clones an object', function () {
    var obj = {
      foo: 'bar',
      bar: 'wow'
    };

    expect(clone(obj)).not.to.equal(obj);
    expect(clone(obj)).to.deep.equal({
      foo: 'bar',
      bar: 'wow'
    });
  });

  it('does a shallow clone', function () {
    var obj = {
      foo: {
        bar: 'baz'
      }
    };

    expect(clone(obj).foo).to.equal(obj.foo);
  });
});
