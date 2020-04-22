// Complete the squares function below.
function squares(a, b) {
    let lower = Math.ceil(Math.sqrt(a));
    let upper = Math.floor(Math.sqrt(b));


    return lower > upper ? 0 : upper - lower + 1;

}

console.log(squares(385793959, 712365911));