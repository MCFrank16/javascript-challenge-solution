// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:

// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// brute force solution with O(n2).
// var twoSum = function(nums, target) {

//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }

// };

// optimized solution with hashmap which is fast compared to the brute force
// searching through a hash map is of a constant time O(1).

function twoSum (arr, target){
    let hash = {};
    let i = 0;

    while (i < arr.length){
        let currNum = arr[i];
        let required = target - currNum;

        let requiredIdx = hash[required];

        if(requiredIdx !== undefined){
            return [requiredIdx, i];
        } else {
            hash[currNum] = i;
        }
        i++;
    }
    return 'Not Found';
}

console.log(twoSum([2, 7, 11, 15], 9));