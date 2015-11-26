var once = require('../once');

describe('once', function () {
  it('makes a function that is only returned once', function () {
    var fn = this.sandbox.spy();
    var onced = once(fn);

    onced();
    onced();
    onced();

    expect(fn.callCount).to.equal(1);
  });

  it('always returns the first-returned value', function () {
    var onced = once(function () {
      return Math.random();
    });
    var firstValue = onced();

    expect(onced()).to.equal(firstValue);
    expect(onced()).to.equal(firstValue);
    expect(onced()).to.equal(firstValue);
  });

  it('passes arguments', function () {
    var fn = this.sandbox.spy();
    var onced = once(fn);

    onced(1, 2, 3);

    expect(fn.calledWithExactly(1, 2, 3)).to.be.true;
  });
});
