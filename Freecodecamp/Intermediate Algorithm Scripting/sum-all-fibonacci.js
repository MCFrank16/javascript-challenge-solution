/**
 *
 * Given a positive integer num, 
 * return the sum of all odd Fibonacci numbers that are less than or equal to num.
 * The first two numbers in the Fibonacci sequence are 1 and 1. 
 * Every additional number in the sequence is the sum of the two previous numbers. 
 * The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
 * 
 * For example, sumFibs(10) should return 10 because 
 * all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
 * 
 */

function sumFibs(num) {
    const arr = [1,1];
    
    for(let i = 0; i < arr.length;i++){
        let nextNumber = arr[i + 1] + arr[i];
        if(nextNumber < num) {
            arr.push(nextNumber);
        }
    }

    return arr.filter(el => el % 2 !== 0).reduce((sum, el) => sum += el);
}
  
sumFibs(4);
