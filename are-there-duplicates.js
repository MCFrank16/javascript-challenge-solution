// solution 1: multiple pointer algorithm

function areThereDuplicates(...args){
  return new Set(args).size !== args.length
}

console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates(1,2,2))
console.log(areThereDuplicates('a','b','c','a'))