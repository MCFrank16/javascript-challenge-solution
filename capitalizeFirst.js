// function capitalizeFirst(arr){
//   return arr.map(el => el[0].toUpperCase() + el.slice(1))
// }

function capitalizeFirst(arr){
   let res = [];
   if(arr.length === 0) return res;
   res.push(arr[0][0].toUpperCase() + arr[0].slice(1));
   res = res.concat(capitalizeFirst(arr.slice(1)));
   return res;
}

console.log(capitalizeFirst(["car","taco","meal"]));