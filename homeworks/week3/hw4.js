function isPalindromes(str) {
  let fromHead = '';
  let fromTail = '';
  for (let i = 0; i <= str.length / 2 - 1; i += 1) {
    fromHead += str[i];
  }

  for (let j = str.length - 1; j >= str.length / 2; j -= 1) {
    fromTail += str[j];
  }
  return fromHead === fromTail;
}
isPalindromes("abcd") ;
isPalindromes("abcba") ;


//console.log(isPalindromes('zxxz'));
//module.exports = isPalindromes;
