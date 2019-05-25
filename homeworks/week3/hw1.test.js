const stars = require('./hw1');

describe('hw1 好多星星', () => {
  it('should return correct answer when n = 1', () => {
    expect(stars(1)).toEqual(['*']);
  });
});
