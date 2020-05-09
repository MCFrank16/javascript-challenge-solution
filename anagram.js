// this solution uses frequency algorithm pattern.

// first solution.
// function validAnagram(str1, str2){
//   if (str1.length !== str2.length) return false;

//   let str1Frequency = {};
//   let str2Frequency = {};

//   for(let i of str1){
//       str1Frequency[i] = (str1Frequency[i] || 0) + 1;
//   }

//   for(let j of str2){
//       str2Frequency[j] = (str2Frequency[j] || 0) + 1;
//   }

//   for(let key in str1Frequency){
//       if((str1Frequency[key] !== str2Frequency[key])) return false;
//   }
//   return true;
// }

// second solution

function validAnagram(str1, str2){
    if (str1.length !== str2.length) return false;

    let lookUp = {};

    for(let i = 0; i < str1.length; i++){
        let letter = str1[i];
        lookUp[letter] ? lookUp[letter]++ : lookUp[letter] = 1;
    }
    
    for(let j = 0; j < str2.length; j++){
        let letter = str2[j];

        if(!lookUp[letter]){
            return false;
        } else {
            lookUp[letter] -= 1
        }
    }
    return true;
}
// console.log(validAnagram("frank", "nkraf"))
console.log(validAnagram("cinema", "manide"))
// console.log(validAnagram("", ""))
// console.log(validAnagram("aaz", "zza"))
// console.log(validAnagram("cat", "cat"))
// console.log(validAnagram("texttwisttime", "timetwisttext"))