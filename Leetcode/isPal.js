function isPalindrome(num){
    if(num < 0) return false;

    let reversed = 0, y = num;

    while(y > 0){
        const lastD = y % 10;
        reversed = (reversed * 10) + lastD;
        y = (y / 10) | 0;
        console.log(y, reversed)
    }
    return num === reversed;
}

console.log(isPalindrome(121));

function swapInPlace(a,b){


    a = a - b;
    b = a + b;
    a = b - a;
    
    return [a,b];

}
console.log(swapInPlace(4,9));