// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 12 -Geometry Progression

// Function to check the geometry series of an array number
function tentukanDeretGeometri(arr) {
    let series = 0;
    let arrayLength = arr.length;
    let checker = false;

    series = arr[1] / arr[0];

    for (let i = 0; i < arrayLength - 1; i++) {
        if (arr[i + 1] / arr[i] === series) {
            checker = true;
        } else {
            checker = false;
        }
    }
    return checker;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false