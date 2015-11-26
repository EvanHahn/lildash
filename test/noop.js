var noop = require('../noop');

describe('noop', function () {
  it('is a function', function () {
    expect(noop).to.be.a('function');
  });

  it('has a length of 0', function () {
    expect(noop.length).to.equal(0);
  });
});
