// this solution uses an algorithm pattern called Multiple pointers
// which basically create pointers or values that correspond to an index or position
// and move towards the beginning, end or middle based on certain condition.

// this function should return the first 2 values which sum up to zero or undefined if none.
// note that the array should be sorted for the moment.
// and this makes its Time complexity O(n).

function sumZero(arr){
  let left = 0;
  let right = arr.length - 1;

  while(left < right){
      let sum = arr[left] + arr[right];
      if(sum === 0){
        return [arr[left], arr[right]];
      } else if(sum > 0){
          right--;
      } else {
          left++;
      }
  }
}

console.log(sumZero([-4,-3,-2,1,5,10]));