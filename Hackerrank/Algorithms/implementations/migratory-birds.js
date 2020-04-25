// Complete the migratoryBirds function below.
function migratoryBirds(arr) {

    const occurences = new Array(arr.length);
    occurences.fill(0);

    for(let i = 0; i < arr.length; i++){
        occurences[arr[i]]++;
    }
    let highest = Math.max(...occurences);

    console.log(occurences.indexOf(highest));

}

migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]);
migratoryBirds([1, 4, 4, 4, 5, 3]);
