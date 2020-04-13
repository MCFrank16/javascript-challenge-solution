function largestPrimeFactor(number) {
    let prime = 2;
    let maxNum = 0;

    while(prime <= number){
        if(number % prime === 0) {
            maxNum = prime;
            number = number / prime;
        } else {
            prime++;
        }
    }
    console.log(maxNum);
    return maxNum;
  }
  
largestPrimeFactor(600851475143);