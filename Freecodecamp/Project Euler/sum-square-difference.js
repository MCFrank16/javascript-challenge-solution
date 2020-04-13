function sumSquareDifference(n) {
    // Good luck!
    let allNumbers = [];
    for(let i = 1; i <= n; i++){
        allNumbers.push(i);
    }

    const squares = allNumbers.map(el => Math.pow(el,2)).reduce((sum, el) => sum + el);

    const squareSum = Math.pow(allNumbers.reduce((sum, el) => sum + el), 2);

    return [squares, squareSum].sort((a,b) => b - a).reduce((a,b) => a - b);

  }
  
sumSquareDifference(100);