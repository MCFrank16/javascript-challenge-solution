// Complete the sockMerchant function below.
function sockMerchant(ar) {
  let pairs = 0;

  for(let i = 0; i < ar.length; i++){
      const pairIndex = ar.indexOf(ar[i], i + 1);
      if(pairIndex > -1){
          ar.splice(i, 1);
          ar.splice(pairIndex - 1, 1);
          pairs++, i = -1;
      }
  }

  console.log(pairs);
  
}

sockMerchant([10,20,20,10,10,30,50,10,20])