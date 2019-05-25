function stars(n) {
  const result = [];
  for (let i = 1; i <= n; i += 1) {
    result.push('*'.repeat(i));
  }
  return result;
}
//stars(1,3,6);
//console.log(n);
module.exports = stars;
