// /**
//  * @param {string} s
//  * @return {number}
//  */
// var lengthOfLongestSubstring = function(s) {
//     let seen = {};
//     let start = 0;
//     let longest = 0;

//     if(typeof(s) !== 'string' || s.length === 0) return 0;

//     for(let i = 0; i < s.length; i++){
//         let char = s.charAt(i);

//         if(seen[char]){
//             start = Math.max(start, seen[char]);
//         }

//         longest = Math.max(longest, i - start + 1);

//         seen[char] = i + 1;
//     }
//     return longest;
// };

// function lengthOfLongestSubstring(str){
//     let ans = 0;
//     let n = str.length;
//     let index = new Array(128);

//     for(let j = 0, i = 0; j < n; j++) {
//         i = Math.max(index[str.charAt(j)], i);
//         ans = Math.max(ans, j - i + 1);
//         index[str.charAt(j)] = j + 1;
//     }

//     return ans;
// }

// console.log(lengthOfLongestSubstring('abcabcbb'));

// var calculate = function(s) {
//     let clear = s.trim().replace(/\s/g, "");

//     for(let i = 0; i < clear.length; i++){
//         console.log(+clear[i]);
//     }

//     return clear;
// };

// console.log(calculate("  3*2 + 3   "))

function getNthFib(n) {
    // Write your code here.
      let fib = [0,1,1];
      for(let i = 3; i < n; i++){
           fib[i] = fib[i - 1] + fib[i - 2]; 
      }
      console.log(fib)
      return fib[n - 1];
}

console.log(getNthFib(5));