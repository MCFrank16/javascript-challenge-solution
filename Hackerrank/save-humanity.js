function virusIndices(p, v) {
   const splitStr = p.split("");
   const count = [];

   for(let i = 0; i < splitStr.length; i++){
       
       if(splitStr[i] + splitStr[i+1] === "an") {
         count.push(splitStr[i - 1] + splitStr[i] + splitStr[i + 1]);
       }
   }

   console.log(count);


}

virusIndices("banana", "nan");