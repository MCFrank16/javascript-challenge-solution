function averagePair(arr, avg){
 let start = 0;
 let end = arr.length - 1;

 while(end > start){
     let sumAvg = (arr[start] + arr[end]) / 2;

     if(sumAvg === avg) return true;
     else if (sumAvg < avg) start++;
     else end--;
 }
 return false;

}

console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));