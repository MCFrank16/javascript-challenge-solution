// Complete the beautifulDays function below.
function reverseNumber(n){
    return +n.toString().split("").reverse().join("");
}
function beautifulDays(i, j, k) {
    let count = 0;

    for(let day = i; day <= j; day++){
       if((day - reverseNumber(day)) % k == 0) count++;
    }

    return count;
}

console.log(beautifulDays(20,23,6));