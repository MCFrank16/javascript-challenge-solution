function extraLongFactorials(n) {
    let total = 1n;
  
    for(let i = 1n; i <= BigInt(n); i++){
        total *= i;
    }
  
    console.log(total.toString());
}

extraLongFactorials(25);
