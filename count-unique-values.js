// this solution uses an algorithm pattern called Multiple pointers
// which basically create pointers or values that correspond to an index or position
// and move towards the beginning, end or middle based on certain condition.

// this function should return the first 2 values which sum up to zero or undefined if none.
// note that the array should be sorted for the moment.
// and this makes its Time complexity O(n).

// function countUniqueValues(arr){
//   console.time('begin');
//   console.log([...new Set(arr)].length);
//   console.timeEnd('begin');
// }

// this solution iterates through the array once, and then brings the value of j to the index of i, if they are not equal.
function countUniqueValues(arr){
    let i = 0;
    let j = 1;

    while(j < arr.length){
        if(arr[i] !== arr[j]){
            i++;
            arr[i] = arr[j];
        }
        j++;
    }
    return arr.length === 0 ? 0 : i + 1;
}

console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2,-1,-1,0,1]));