// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 2 - Accessing Value in Array

// function reverse value in array
function balikString (str) {
    let strLength = str.length;
    let reverseWord = '';

    for (let counter = 1; counter <= strLength; counter++) {
        reverseWord += str[strLength - counter];
    }
    return reverseWord;
}

// Declare variable
let str = 'hello world!';

console.log(balikString(str));
//input "hello world!"
//output "!dlrow olleh"