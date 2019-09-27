// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 11 -Arithmetic Progression

// Function to check the arithmetic series of an array number
function tentukanDeretAritmatika(arr) {
    let series = 0;
    let arrayLength = arr.length;
    let checker = false;

    series = arr[1] - arr[0];

    for (let i = 0; i < arrayLength - 1; i++) {
        if (arr[i + 1] - arr[i] === series) {
            checker = true;
        } else {
            checker = false;
        }
    }
    return checker;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false