function alternate(s) {
    let charToRemove = '';
    let appearedOnce = '';
    for(let i = 0; i < s.length; i++){ 
        if(s[i] == s[i + 1]) charToRemove = s[i]; 
    
    }
    console.log(charToRemove, appearedOnce);
    console.log(s.split("").filter(e => e.replace(charToRemove, "")));
}

alternate("beabeefeab");