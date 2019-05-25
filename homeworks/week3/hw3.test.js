const isPrime = require('./hw3');

describe('hw3 判斷質數', () => {
  it('should return correct answer when n = 1', () => {
    expect(isPrime(1)).toBe(false);
  });
  it('should return correct answer when n = 2', () => {
    expect(isPrime(2)).toBe(true);
  });
  it('should return correct answer when n = 4', () => {
    expect(isPrime(4)).toBe(false);
  });
  it('should return correct answer when n = 7', () => {
    expect(isPrime(7)).toBe(true);
  });
  it('should return correct answer when n = 13', () => {
    expect(isPrime(13)).toBe(true);
  });
  it('should return correct answer when n = 19', () => {
    expect(isPrime(19)).toBe(true);
  });
  it('should return correct answer when n = 30', () => {
    expect(isPrime(30)).toBe(false);
  });
});
