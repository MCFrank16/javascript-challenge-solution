// learning sliding window pattern algorithm.

// this function will return the longest substring with all distinct characters.
// if the string is empty or not provided return O.

function findLongestSubstring(str){
    // add whatever parameters you deem necessary - good luck!

    if(typeof(str) !== "string" || str.length === 0) return 0;

    let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
      
    let char = str[i];

    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    
    longest = Math.max(longest, i - start + 1);
    
    seen[char] = i + 1;
  }
  return longest;
}
console.log(findLongestSubstring("thisisawesome"));
