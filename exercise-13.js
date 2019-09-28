// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 13 -Nearest Target

// Function to check the nearest distance
function targetTerdekat(arr) {
    let indexCharO = 0;
    let indexCharX = 0;
    let distance = 0;
    let arrayLength = arr.length;
    let nearestDistance = arrayLength;
    
    if (arr.indexOf('x') === -1) {
        return 0;
    }

    for (let i = 0; i < arrayLength; i++) {
        if (arr[i] === 'o') {
            indexCharO = i;
        }
    }
    
    for (let j = 0; j < arrayLength; j++) {
        if (arr[j] === 'x') {
            indexCharX = j;
            distance = Math.abs(indexCharX - indexCharO);
            if (distance < nearestDistance) {
                nearestDistance = distance;
            }
        }
    }

    return nearestDistance;
}

// // TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2