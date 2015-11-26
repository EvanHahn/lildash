var isArray = require('../isarray');

describe('isArray', function () {
  describe('returns true for', function () {
    it('arrays', function () {
      expect(isArray([])).to.be.true;
      expect(isArray([1, 2, 3])).to.be.true;
    });
  });

  describe('returns false for', function () {
    it('numbers', function () {
      expect(isArray(0)).to.be.false;
      expect(isArray(-0)).to.be.false;
      expect(isArray(1)).to.be.false;
      expect(isArray(-1)).to.be.false;
      expect(isArray(1.2)).to.be.false;
      expect(isArray(-1.2)).to.be.false;
    });

    it('strings', function () {
      expect(isArray('')).to.be.false;
      expect(isArray(' ')).to.be.false;
      expect(isArray('hello')).to.be.false;
    });

    it('objects', function () {
      expect(isArray({
        0: 'foo',
        length: 1
      })).to.be.false;
    });

    it('arguments', function () {
      expect(isArray(arguments)).to.be.false;
    });
  });
});
