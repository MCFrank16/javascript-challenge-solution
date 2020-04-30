// // Complete the cutTheSticks function below.

function cutTheSticks(arr){
    const res = [];
    while(arr.length > 0){

        let sort = arr.sort((a,b) => a - b);
        let min = Math.min(...sort);
        let count = 0;

        for(let i = 0; i < sort.length; i++){
            if(sort[i] == min) count++;
        }
        res.push(sort.length);
        sort.splice(0, count);
    }
    return res;
}

console.log(cutTheSticks([1,13,3,8,14,9,4,4]));