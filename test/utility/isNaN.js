var isnan = require('../../utility/isnan');

describe('isNaN', function () {
  describe('returns true for', function () {
    it('NaN', function () {
      expect(isnan(0 / 0)).to.be.true;
    });
  });

  describe('returns false for', function () {
    it('numbers', function () {
      expect(isnan(0)).to.be.false;
      expect(isnan(-0)).to.be.false;
      expect(isnan(1)).to.be.false;
      expect(isnan(-1)).to.be.false;
      expect(isnan(1.2)).to.be.false;
      expect(isnan(-1.2)).to.be.false;
    });

    it('strings', function () {
      expect(isnan('')).to.be.false;
      expect(isnan(' ')).to.be.false;
      expect(isnan('hello')).to.be.false;
    });
  });
});

