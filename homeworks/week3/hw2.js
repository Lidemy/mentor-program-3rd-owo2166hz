function alphaSwap(str) {
 let resylt = '';
 for (let i = 0; i < str.length; i += 1) {
   	resylt +=str[i] >= 'a' && str[i] <='z' ? str[i].toUpperCase() : str[i].toLowerCase();
   }  
   return resylt
}
//alphaSwap("ABCD");
//alphaSwap("a1lKK2");

module.exports = alphaSwap;
