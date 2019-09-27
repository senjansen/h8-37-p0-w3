// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 8 - The Biggest Number Combination

// Function to choose two digit biggest number combination
function pasanganTerbesar(num) {
    num = num.toString();
    let numLength = num.length;
    let currentNumber = 0;
    let biggestValue = 0;

    for (let i = 0; i < numLength - 1; i++) {
        currentNumber = parseInt(num[i] + num[i + 1]) ;
        if (currentNumber > biggestValue) {
            biggestValue = currentNumber;
        }
    }
    return biggestValue;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99