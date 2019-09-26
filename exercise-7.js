// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 7 - Counting Words

// Function to count number of words
function hitungJumlahKata(kalimat) {
    let countWords = kalimat.split(' ');
    return countWords.length;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5