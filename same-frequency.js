function sameFrequency(a, b){
    // good luck. Add any arguments you deem necessary.
    let aFrequency = {};
    let bFrequency = {};

    for(let i of String(a)){
        aFrequency[i] = (aFrequency[i] || 0) + 1;
    }

    for(let j of String(b)){
        bFrequency[j] = (bFrequency[j] || 0) + 1;
    }
    
    for(let key in aFrequency){
        if (aFrequency[key] !== bFrequency[key]) return false;
    }
    return (String(a).length !== String(b).length) ? false: true;
}

console.log(sameFrequency(231, 321))
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));