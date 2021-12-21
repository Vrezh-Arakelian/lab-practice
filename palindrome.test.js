const palindrome = require("./palindrome");

test(
    "is palindrome", 
    () => {
       expect(palindrome("топот")).toBe(true);
    }
);

test(
    "is not palindrome", 
    () => {
       expect(palindrome("троторn")).toBe(false);
    }
);