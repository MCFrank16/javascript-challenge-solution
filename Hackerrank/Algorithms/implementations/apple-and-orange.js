// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
 
    const appleFall = apples.map(el => el + a).filter(el => el >= s && el <= t).length;
    const orangeFall = oranges.map(el => el + b).filter(el => el >= s && el <= t).length;
    console.log(appleFall);
    console.log(orangeFall);

}

countApplesAndOranges(7,11,5,15,[-2,2,1],[5,-6]);