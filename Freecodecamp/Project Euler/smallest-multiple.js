function smallestMult(n) {
    // Good luck!
    let allNumbers = [];
    
    for (let i = 1; i <= n; i++){
        allNumbers.push(i);
    }

    let max = Math.max(...allNumbers);
    let min = Math.min(...allNumbers);
    let sm = max;

    for(let i = max - 1; i >= min; i--){
        if(sm % i){
            sm = sm + max;
            i = max;
        }
    }

    console.log(sm);
    return sm;
  }
  
smallestMult(5);