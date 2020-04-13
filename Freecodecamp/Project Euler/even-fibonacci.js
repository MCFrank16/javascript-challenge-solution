function fiboEvenSum(n) {
    // You can do it!
    let nextNumber;
    const fibonacciArr = [1,2];
    for(let i = 0; i < fibonacciArr.length; i++){
        nextNumber = fibonacciArr[i] + fibonacciArr[i + 1];
        if (nextNumber <= n) {
            fibonacciArr.push(nextNumber);
        }
    }
    return fibonacciArr.filter(e => e % 2 === 0).reduce((a,b) => a + b);
    
  }
  
fiboEvenSum(4000000);