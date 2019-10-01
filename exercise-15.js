// Jansen - Hacktiv8 Batch 37 - King Fox
// Exercise 15 - Grouping Animals

// Function to group animals in a multidimensional array
function groupAnimals(animals) {
    let groupAnimals = [];
    let index = 0;
    let animalsLength = animals.length;

    animals = animals.sort();

    for (let i = 0; i < animalsLength; i++) {
        if (groupAnimals.length === 0) {
            groupAnimals.push([animals[i]]);
        } 
        else if (groupAnimals[index][0][0] === animals[i][0]) {
            groupAnimals[index].push(animals[i]);
        } else {
            groupAnimals.push([animals[i]]);
            index++;
        }
    }
    return groupAnimals;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]