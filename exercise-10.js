// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 10 - Unique Multiplication

// Function to calculate multiplication of an array number
function perkalianUnik(arr) {
    let multiplicationResult = [];
    arrayLength = arr.length;
    
    for (let i = 0; i < arrayLength; i++) {
        let sum = 1;
        for (let j = 0; j < arrayLength; j++) {
            sum *= arr[j];
        }
        sum /= arr[i];
        multiplicationResult.push(sum);
    }
    return multiplicationResult;
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]