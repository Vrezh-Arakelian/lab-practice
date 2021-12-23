function palindrome(str){
    str = str.toLowerCase();
    const len = Math.floor(str.length/2);
    for (let i = 0 ; i < len ; i++)
      if (str[i] !== str[str.length - i -1]){
        return false ;
      }
    return true;
   
    
}
/*const st = palindrome(str)
  if (st != str)
      throw new Error('param is not a string');

   
*/

try {

  console.log(palindrome(null));

}
catch (error){
  console.log('param is not a string');
}
module.exports = palindrome;