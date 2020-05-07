// Complete the saveThePrisoner function below.
function saveThePrisoner(n, m, s) {
    var id;
    id= s+(m-1);   
    if(id>n){
        var rem= id%n;
        if(rem==0){
            rem=n;
        }
       return rem;
   }   

   return id;

}

console.log(saveThePrisoner(3, 7, 3));
console.log(saveThePrisoner(5, 2, 2));
console.log(saveThePrisoner(5, 2, 1));