// Complete the hurdleRace function below.
function hurdleRace(k, height) {
 let maxHeight = Math.max(...height);
 let dose = 0;

 return (maxHeight - k > 0) ? dose = maxHeight - k : dose;

}

console.log(hurdleRace(4, [1,6,3,5,2]));
console.log(hurdleRace(7, [2,5,4,5,2]));