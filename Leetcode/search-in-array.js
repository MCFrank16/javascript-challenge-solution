// running complexity has to O(log n)

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {

    let low = 0;
    let high = nums.length - 1;

    if( low > high) return -1;

    let mid = Math.floor((nums.length - 1) / 2);

    if (nums[mid] === target) return target;


    let left = nums.splice(low, mid - 1);
    let right = nums.splice(mid + 1, high);
    
    if(nums[0] <= nums[mid]) {
        if (target >= nums[mid] && target <= nums[high] ){
            return search(left, target);
        } else {
            return search(right, target);
        }
    }

    if(target >= nums[mid] && target <= nums[high]){
        return search(right, target);
    } else{
        search(left, target);
    }

};

console.log(search([4,5,6,7,0,1,2], 6))
