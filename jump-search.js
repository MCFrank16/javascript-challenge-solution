// here is the implementation of a searching algorithm called jump search

// time complexity: O(sqrt(n))
// space complexity: O(1)


function jumpSearch(arr, num){
  let step = Math.sqrt(arr.length); // initialize the number of steps we should take.
  let prev = 0; // initialize where our index should point at first.
  
  // find where the number is located.
  while(num > arr[step - 1]){
      prev = step;
      step += Math.sqrt(arr.length);
      if (prev >= step) return -1;
  }

  // perform a linear search to reach the number
  while(arr[prev] < num){
      prev++;
      
      // if we reach the end of the array without finding where our num is, we return -1;
      if(prev == Math.min(step, arr.length)){
          return -1;
      }

      // if the num is found
      if(arr[prev] === num){
          return prev;
      }
  }

  return -1;
}

console.log(jumpSearch([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610], 55));
