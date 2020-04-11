
/**
 *
 * Flatten a nested array. You must account for varying levels of nesting.
 * you should not use the flat or flatmap array method. find another way.
 * 
 */
function streamRollArray(arr) {
    return true ? arr.reduce((acc,val ) => acc.concat(Array.isArray(val) ? steamRollArray(val) : val), []) : arr.slice();
}

streamRollArray([1, [2], [3, [[4]]]]);