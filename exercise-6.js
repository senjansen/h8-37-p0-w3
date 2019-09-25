// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 6 - Palindrome Number

// Function to return the next palindrome number
function angkaPalindrome(num) {
    num += 1;
    let numToStr = num.toString();
    let numToStrLength = numToStr.length;
    let reverseNum = '';
    
    for (let i = 1; i <= numToStrLength; i++) {
        reverseNum += numToStr[numToStrLength - i];
    }

    if (parseInt(reverseNum) === num) {
        return num;
    } else {
        return angkaPalindrome(num);
    }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001