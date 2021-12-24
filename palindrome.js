function palindrome(str){
      if (typeof str !== "string")
      throw new Error('param is not a string blablabla');
    str = str.toLowerCase();
    const len = Math.floor(str.length/2);
    for (let i = 0 ; i < len ; i++)
      if (str[i] !== str[str.length - i -1]){
        return false ;
      }
    return true;
   
    
}
console.log(palindrome(7));

module.exports = palindrome;