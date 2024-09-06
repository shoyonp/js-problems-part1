/**
 * array has some duplicate elements
 * []
 */

const biryanikhor = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul', 'kabul', 'cabul'];
const numbers = [1, 4, 74, 4, 8, 8, 2, 74, 9];

function noDuplicate(array){
    const unique =[];
    for(const item of array){
        if(unique.includes(item) === false){
            unique.push(item);
        }
    }
    return unique;
}

const uniqueArray = noDuplicate(biryanikhor)
console.log(uniqueArray);
