// Complete the birthday function below.
function birthday(s, d, m) {
    let portions = 0;
    for(let i = 0; i < s.length; i++){
        if(s.slice(i, m++).reduce((tot,val) => tot + val, 0) === d){
            portions++;
        };
    } 
    return portions;

}

birthday([2,2,1,3,2], 4, 2);