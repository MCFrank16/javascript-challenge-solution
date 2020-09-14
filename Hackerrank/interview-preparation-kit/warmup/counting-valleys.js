function countingValleys(steps, path){
    let alt = 0;
    let count = 0;

    for(let i = 0; i < steps; i++){
        if(path.charAt(i) === 'D' && alt == 0){
            count++;
            alt--;
        } else if(path.charAt(i) === 'D' && alt !== 0){
            alt--;
        } else if(path.charAt(i) === 'U'){
            alt++;
        }
    }
   return count;
}

console.log(countingValleys(8, "DDUUUUDD"));