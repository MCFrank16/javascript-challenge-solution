// let's say you are given a base and an exponent: 2 and 3
// we want you to compute the result of 2^3: 2 * 2 * 2

// function power(base, exponent){
//     let res = 1;
//     for(let i = 1; i <= exponent; i++){
//        res = res * base;
//     }
//     return res;
// }

// const arr = [10,4,2,5,7,97];

// console.log(arr[Math.floor(Math.random() * arr.length)]);

function power(b, e){
    if(e === 0) return 1;
    return b * power(b, e - 1);
}

// // frank ===> knarf
// // function reverse(str){
// //   let newStr = '';
// //   for(let i = str.length - 1; i >= 0; i--){
// //       newStr += str[i];
// //   }
// //   return newStr;
// // }

// function reverse(str){
//     if(str.length === 0) return 'mutabazi';
//     return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse('mutabazi'));

function foo(arr){
    let newArr = [];
    let i = arr.length - 1;
    do{
      newArr.push(arr[i]);
      i--;
    } while(i >= 0);
    return newArr;
}

function primeFactorsTo(max) {
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    return primes;
}

// this runs in O(square root of n)
function isPrime(n){
    const lmt = Math.sqrt(n);
    for(let i = 2; i <= lmt; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

function permutation(str){
    if(str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str.split('').reduce((acc, letter, i) => 
        acc.concat(permutation(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), []
    )
}

// console.log(permutation("Tact Coa"));

// function div(a,b){
//     let count = 0;
//     let sum = b;
//     while(sum <= a){
//         sum += b;
//         count++;
//     }
//     console.log(sum);
//     return count;
// }

// console.log(div(5, 2));

var moveZeroes = function(nums) {
    
    let count = 0;
    nums.forEach(el => {
        if(nums[el] !== 0){
            nums[count] = nums[el];
            count++;
        }
    });

    for(let i = count; i < nums.length; i++){
        nums[i] = 0;
    }
    return nums;
};

console.log(moveZeroes([0,0,1,7]))