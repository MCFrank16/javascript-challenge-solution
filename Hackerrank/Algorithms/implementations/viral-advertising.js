// Complete the viralAdvertising function below.
function viralAdvertising(n) {
    let day = 1;
    let liked = 0;
    let shared = 5;
    let cumulative = 0;

    while(day <= n){
        cumulative += Math.floor(shared/2);
        liked = Math.floor(shared/2);
        shared = liked * 3;
        day++;
    }

    return cumulative;

}

console.log(viralAdvertising(5));
