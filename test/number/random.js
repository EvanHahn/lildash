var random = require('../../number/random');

describe('random', function () {
  it('always returns a valid integer', function () {
    for (var i = 0; i < 100; i++) {
      expect([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).to.include(random(1, 10));
    }
  });

  it('eventually returns the lower bound', function () {
    while (true) {
      if (random(1, 10) === 1) {
        break;
      }
    }
  });

  it('eventually returns the upper bound', function () {
    while (true) {
      if (random(1, 10) === 10) {
        break;
      }
    }
  });

  it('returns the only value if there is one', function () {
    for (var i = 0; i < 100; i++) {
      expect(random(8, 8)).to.equal(8);
    }
  });
});
