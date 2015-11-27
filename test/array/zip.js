var zip = require('../../array/zip');

describe.skip('array/zip', function () {
  it('returns an empty array with passed one', function () {
    expect(zip([])).to.deep.equal([]);
  });

  it('splits an array into smaller arrays', function () {
    expect(zip([1, 2, 3])).to.deep.equal([[1], [2], [3]]);
  });

  it('combines arrays', function () {
    var zipped = zip(
      [1, 2, 3],
      ['a', 'b', 'c'],
      [true, false],
      ['x', 'y', 'z']
    );

    console.log(zipped);

    expect(zipped).to.deep.equal([
      [1, 'a', true, 'x'],
      [2, 'b', false, 'y'],
      [3, 'c', undefined, 'z']
    ]);
  });
});
