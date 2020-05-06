// Complete the utopianTree function below.
function utopianTree(n) {
 let initialHeight = 0;
 for(let i = 0; i <= n; i++){
    (i % 2 != 0 && i != 1) ? initialHeight *= 2 : initialHeight += 1;
 }
 return initialHeight;

}

console.log(utopianTree(5))