// function repeatedString(s, n){
//     let newStr = '';
//     let freq = {};
//     while(newStr.length < n){
//         newStr += s;
//         if(newStr.length > n){
//             newStr = newStr.substring(0, n);
//         }
//     }
//     for(let i of newStr){
//         freq[i] = (freq[i] || 0) + 1;
//     }
//     return freq['a'];

// }

// function repeatedString(s, n) {

//     const x = Math.floor(n / s.length);
//     let count = (s.split("a").length - 1) * x;
//     const rem = n % s.length;
  
//     for(let i = 0; i < rem; i++){ if(s.charAt(i) === "a") count++; }
//     return count;
    
// }


// a solution found on youtube here is the link for more clarification
// https://www.youtube.com/watch?time_continue=388&v=guf67riXuqM&feature=emb_title
// runtime is O(n) because it depends on the length of the n to count the occurences.
function repeatedString(s, n){
    let numberOfAs = 0;

    // a case where a falls in the length of the n evenly
    if(n >= s.length){

      // find the number of a in the initial instance of the string
      let occ = [...s].filter((e) => e === 'a').length;
      
      // see how many times s can be repeated in the first n character of the initial s
      numberOfAs = Math.floor(n / s.length) * occ;

    }

    // if the repetition is not even we also check this case
    // check the remainder
    let tailString = n % s.length;
    
    // loop through the remainder value and add on the number if the character is what we are looking for
    for(let i = 0; i < tailString; i++){
        if(s[i] === 'a') numberOfAs++;
    }

    return numberOfAs;
}

console.log(repeatedString('aba', 10))
