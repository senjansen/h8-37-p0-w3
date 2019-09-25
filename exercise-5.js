// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 5 - Palindrome

// Function to return true if the word is a palindrome
function palindrome(kata) {
    let reverse = '';
    let kataLength = kata.length;

    for (let i = 1; i <= kataLength; i++) {
        reverse += kata[kataLength - i];
    }
    
    return kata === reverse;
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false