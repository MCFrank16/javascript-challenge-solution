/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    return x.toString().split('').reverse().join('');
};

console.log(reverse(-123))