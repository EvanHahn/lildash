var identity = require('../../utility/identity');

describe('identity', function () {
  it('returns undefined when passed no arguments', function () {
    expect(identity()).to.equal(undefined);
  });

  it('returns the first argument passed', function () {
    expect(identity(1, 2, 3)).to.equal(1);
  });
});
