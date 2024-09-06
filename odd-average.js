/**
 * function takes an array as paremeter
 * give me the avaerage of the odd numbers in the array 
 */


/**
 * 
 * 1. put odd numbers in an array
 */

function oddAverge(unmbers){
    const odds = [];
    for(const number of numbers){
      if(number % 2 === 1){
        // console.log(number);
        odds.push(number);
      }
    }
    // odds is the array that contains only the oddd numbers
    // console.log(odds);
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum , count);
    const avg = sum / count;
    return avg;
}


const numbers = [23, 932, 27, 46, 48, 87, 5, 33, 7];
const avg = oddAverge(numbers);
console.log('average of the odd numbers is:', avg);