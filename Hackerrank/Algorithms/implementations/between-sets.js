/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    // Write your code here
    console.time('finish time');
    const min = a[0];
    const max = b[b.length - 1];
    const allNumbers = [];
    const factors = [];

    for(let i = min; i <= max; i++){
       let checkTrue = true;
       for(let j of a){
           if(i % j !== 0){
               checkTrue = false;
           }
       }
       if(checkTrue){
           allNumbers.push(i);
       }
    }

    for(let index = 0; index < allNumbers.length; index++){
        let check = true;
        
        for(let el of b){
            if(el % allNumbers[index] !== 0){
                check = false;
            }
        }

        if(check){
           factors.push(allNumbers[index]);
        }
    }
    
    console.log(factors.length);
    console.timeEnd('finish time');

}

getTotalX([2,4],[16,32,96]);