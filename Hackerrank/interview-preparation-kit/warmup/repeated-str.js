function repeatedString(s, n){
    let newStr = '';
    let freq = {};
    while(newStr.length < n){
        newStr += s;
        if(newStr.length > n){
            newStr = newStr.substring(0, n);
        }
    }
    for(let i of newStr){
        freq[i] = (freq[i] || 0) + 1;
    }
    return freq['a'];

}

function repeatedString(s, n) {

    const x = Math.floor(n / s.length);
    let count = (s.split("a").length - 1) * x;
    const rem = n % s.length;
  
    for(let i = 0; i < rem; i++){ if(s.charAt(i) === "a") count++; }
    return count;
    
}

console.log(repeatedString('abcabc', 10))
