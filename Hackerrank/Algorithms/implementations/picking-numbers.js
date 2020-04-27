/*
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {

   let max = 0; 
   const map = new Array(a.length + 1);
   map.fill(0);

   for(let i = 0; i < a.length; i++){
       map[a[i]]++;
   }

   for(let i = 1; i < map.length; i++){
       if(map[i] + map[i - 1] > max){
           max = map[i] + map[i - 1];
       }
   }
   console.log(map);
   return max;
}

pickingNumbers([1,1,2,2,4,4,5,5,5]);