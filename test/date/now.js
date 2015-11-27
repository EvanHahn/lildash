var now = require('../../date/now');

describe('date/now', function () {
  it('returns the current time', function () {
    expect(now()).to.equal(new Date().getTime());
  });
});
