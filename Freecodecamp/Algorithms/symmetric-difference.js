/**
 * 
 * Create a function that takes two or more arrays and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.
 */

function diff(arr1,arr2){
    return [...arr1.filter(e => !arr2.includes(e)), ...arr2.filter(e => !arr1.includes(e))];
}

function sym(...args) {
    return [...new Set(args.reduce(diff))];
}
  
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);