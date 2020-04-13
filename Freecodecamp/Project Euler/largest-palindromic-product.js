function largestPalindromeProduct(n) {
    // Good luck!
    const max = +[...Array(n)].reduce(a => a += 9,"");
    const min = (max + 1) / 10;

    let res = [];

    for (let i = max; i >= min; i--){
        for(let j = max; j >= min; j--) {
          let num = i * j;

          let reversedNum = [...String(num)].reverse().join("");

          if(num == reversedNum){
              res.push(num);
              break;
          }
        }
    }
    return Math.max(...res);
}
  
largestPalindromeProduct(2);