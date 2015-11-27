var sample = require('../sample');

describe('sample', function () {
  describe('with one argument', function () {
    it('returns undefined when passed an empty array', function () {
      expect(sample([])).to.equal(undefined);
    });

    it('always returns the same element with a one-element array', function () {
      for (var i = 0; i < 10; i++) {
        expect(sample([12])).to.equal(12);
      }
    });

    it('returns an element inside the array', function () {
      var i;
      var arr = [1, 5, 8, 10, 12];

      for (i = 0; i < 10; i++) {
        expect(arr).to.include(sample(arr));
      }
    });
  });
});
