const isPalindromes = require('./hw4');

describe('hw4 判斷迴文', () => {
  it('should return correct answer when str = owo', () => {
    expect(isPalindromes('owo')).toBe(true);
  });
    it('should return correct answer when str = zxcvcxz', () => {
    expect(isPalindromes('zxcvcxz')).toBe(true);
  });
      it('should return correct answer when str = dwsfergthy', () => {
    expect(isPalindromes('dwsfergthy')).toBe(false);
  });
        it('should return correct answer when str = aaaaaaa', () => {
    expect(isPalindromes('aaaaaaa')).toBe(true);
  });
});
