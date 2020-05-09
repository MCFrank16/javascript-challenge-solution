// we are asked to check if a array items are squares of the b array, if yes return true or false.


// naive approach with a time complexity of O(n^2)
// function countFrequency(a,b){
//     if(a.length !== b.length) return false;
    
//     for(let i = 0; i < a.length; i++){
//         let correctIndex = b.indexOf(a[i] ** 2);
//         if(correctIndex === -1) return false;
//         b.splice(correctIndex, 1);
//     }
//     return true;
// }

// using frequency counter algorithm which falls in a linear time complexity i.e O(n)

function countFrequency(a,b){
    if(a.length !== b.length) return false;

    let frequencyCounterA = {};
    let frequencyCounterB = {};

    for(let i of a){
        frequencyCounterA[i] = (frequencyCounterA[i] || 0) + 1;
    }

    for(let j of b){
        frequencyCounterB[j] = (frequencyCounterB[j] || 0) + 1;
    }

    for(let key in frequencyCounterA){
        if(!(key ** 2 in frequencyCounterB)) return false;
        if(!(frequencyCounterB[key ** 2] !== frequencyCounterA)) return false;
    }

    return true;
}

console.log(countFrequency([3,2,4,5], [9,4,16,24]))