function isPrime(n) {
  let count = 0;
  for (let i = 1; i < n; i += 1) {
    if (n % i === 0) {
      count += 1;
    }
  }
  return count === 1;
}
isPrime(2);
isPrime(40);
//console.log(isPrime(7));
//module.exports = isPrime;
