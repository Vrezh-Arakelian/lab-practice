function polindrom(str){
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}
console.log(polindrom("топот"));
console.log(polindrom("шопот"));

