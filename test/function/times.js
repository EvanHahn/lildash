var times = require('../../function/times');

describe('times', function () {
  it('can call a function 0 times', function () {
    var fn = this.sandbox.spy();

    times(0, fn);

    expect(fn.callCount).to.equal(0);
  });

  it('can call a function 3 times', function () {
    var fn = this.sandbox.spy();

    times(3, fn);

    expect(fn.getCall(0).args).to.deep.equal([0]);
    expect(fn.getCall(1).args).to.deep.equal([1]);
    expect(fn.getCall(2).args).to.deep.equal([2]);
  });
});
