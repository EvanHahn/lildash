var last = require('../../array/last');

describe('last', function () {
  describe('arrays', function () {
    it('returns the last element if there is one', function () {
      expect(last(['foo'])).to.equal('foo');
    });
    
    it('returns undefined when passed an empty array', function () {
      expect(last([])).to.equal(undefined);
    });
  });
  
  describe('arraylikes', function () {
    it('returns the last element if there is one', function () {
      expect(last({
        0: 'foo',
        1: 'bar',
        length: 2
      })).to.equal('bar');
    });
    
    it('returns undefined when passed an empty string', function () {
      expect(last({})).to.equal(undefined);
    });
    
    it('returns undefined when passed an object with a 0 length', function () {
      expect(last({length: 0})).to.equal(undefined);
    });
  });
  
  describe('strings', function () {
    it('returns the last character if there is one', function () {
      expect(last('foop')).to.equal('p');
    });
    
    it('returns undefined when passed an empty string', function () {
      expect(last('')).to.equal(undefined);
    });
  });
});