var random = require('../../boolean/random');

describe('boolean/random', function () {
  it('always returns true or false', function () {
    for (var i = 0; i < 100; i++) {
      expect(random()).to.be.a('boolean');
    }
  });

  it('eventually returns true', function () {
    while (true) {
      if (random() === true) {
        break;
      }
    }
  });

  it('eventually returns false', function () {
    while (true) {
      if (random() === false) {
        break;
      }
    }
  });
});
