/*
 * Complete the getMoneySpent function below.
 */
function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
    let i = 0;
    let diff = -1;

    while(i < keyboards.length){
        for(let j = 0; j < drives.length; j++){
            (drives[j] + keyboards[i] <= b && drives[j] + keyboards[i] > diff)
                ? diff = drives[j] + keyboards[i] : diff;
            
        }
        i++;
    }
    return diff;

}
console.log(getMoneySpent([40,50, 60],[5,8,12], 60));
console.log(getMoneySpent([4],[5],5));
