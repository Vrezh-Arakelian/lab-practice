const palindrome = require("./palindrome");

test(
    "is palindrome", 
    () => {
       expect(palindrome("топот")).toBe(true);
    }
);