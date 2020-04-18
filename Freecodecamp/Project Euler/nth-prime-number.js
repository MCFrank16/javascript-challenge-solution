function nthPrime(n) {

    const primes = [2];
      
    let num = 3,
      isPrime = true;
  
    while (primes.length < n) {
      for(let i = 0; primes[i] <= num; i++){
        if(num % primes[i] == 0){
          isPrime = false;
          break;
        }
      }

      if(isPrime) primes.push(num);
      isPrime = true;

      num += 2;
    }
    console.log(primes[primes.length - 1]);
    return primes[primes.length - 1];

  }

  nthPrime(15);
