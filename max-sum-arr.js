// this solution uses a method called sliding window pattern
// where we loop through the arr once and then add the next value to 
// the current temporaly sum without also forgetting to remove the first index at 0.

// so that arrangement is what known as sliding window pattern, with a linear time complexity.

function maxSumArr(arr, n){
  let maxSum = 0;
  let tempSum = 0;

  for(let i = 0; i < n; i++){
      maxSum += arr[i];
  }

  tempSum = maxSum;
  for(let i = n; i < arr.length; i++){
      tempSum += arr[i] - arr[i - n];
      maxSum = Math.max(tempSum, maxSum);
  }

  return (arr.length < n) ? null : maxSum;
}

console.log(maxSumArr([2,6,9,2,1,8,5,6,3], 3))