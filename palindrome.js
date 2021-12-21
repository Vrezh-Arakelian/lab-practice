function palindrome(str){
    str = str.toLowerCase();
    const len = Math.floor(str.length/2);
    for (let i = 0 ; i < len ; i++)
      if (str[i] !== str[str.length - i -1]){
        return false ;
      }
    return true; 
}
console.log(palindrome("топот"));
console.log(palindrome("троторп"));

module.exports = palindrome;