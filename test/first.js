var first = require('../first');

describe('first', function () {
  describe('arrays', function () {
    it('returns the first element if there is one', function () {
      expect(first(['foo'])).to.equal('foo');
    });
    
    it('returns undefined when passed an empty array', function () {
      expect(first([])).to.equal(undefined);
    });
  });
  
  describe('arraylikes', function () {
    it('returns the first element if there is one', function () {
      expect(first({0: 'foo'})).to.equal('foo');
    });
    
    it('returns undefined when passed an empty string', function () {
      expect(first({})).to.equal(undefined);
    });
    
    it('returns undefined when passed an object without a 0 key', function () {
      expect(first({1: 'foo'})).to.equal(undefined);
    });
  });
  
  describe('strings', function () {
    it('returns the first character if there is one', function () {
      expect(first('foo')).to.equal('f');
    });
    
    it('returns undefined when passed an empty string', function () {
      expect(first('')).to.equal(undefined);
    });
  });
});