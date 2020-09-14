/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var mergeArr = (arr1, arr2) => {
    let arr = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            arr.push(arr1[i]);
            i++;
        } else {
            arr.push(arr2[j]);
            j++;
        }
    }
    
    while(i < arr1.length){
        arr.push(arr1[i]);
        i++;
    }
    
    while(j < arr2.length){
        arr.push(arr2[j]);
        j++;
    }
    return arr;
}

// this whole algorithm runs in O(log (m+n))
var findMedianSortedArrays = function(nums1, nums2) {
    let merge = mergeArr(nums1, nums2); // O(n)

    return (merge.length % 2 === 0) 
    ? 
    (merge[Math.floor((merge.length - 1) / 2)] + merge[Math.floor((merge.length - 1) / 2) + 1]) / 2 
    : 
    merge[Math.floor((merge.length - 1) / 2)];
};

console.table(findMedianSortedArrays([1,2],[3]));
console.table(findMedianSortedArrays([1,2],[3,4]));