// Complete the breakingRecords function below.
function breakingRecords(scores) {
    let highScore = scores[0];
    let highCount = 0;
    let lowScore = scores[0];
    let lowCount = 0;

    scores.forEach(element => { if(element > highScore){ highScore = element; highCount++;}});
    scores.forEach(element => { if(element < lowScore) { lowScore = element; lowCount++; }});

    console.log([highCount, lowCount].join(" "));

}

breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]);