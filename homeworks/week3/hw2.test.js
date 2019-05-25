const alphaSwap = require('./hw2');

describe('hw2 大小寫互換', () => {
  it('should return correct answer when str = nick', () => {
    expect(alphaSwap('nick')).toBe('NICK');
  });
    it('should return correct answer when str = nick', () => {
    expect(alphaSwap('owo123')).toBe('OWO123');
  });
});
