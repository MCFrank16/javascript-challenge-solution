// this solution uses sliding window algorithm pattern to check for a minimum length
// which sums up to n or greater than n.

// if there isn't one the function should return 0.

function minSubArrayLen(arr, n){
    let minLength = Infinity;
    let sum = 0;
    let start  = 0;
    let end = 0;

    while(start < arr.length){
        if(sum < n && end < arr.length){
           sum += arr[end];
           end++;
        }

        else if (sum >= n) {
            minLength = Math.min(minLength, end - start);
            sum -= arr[start];
            start++;
        }

        else{
            break;
        }
    }

    return minLength === Infinity ? 0 : minLength;
    
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));