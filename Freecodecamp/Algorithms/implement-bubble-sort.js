function bubbleSort(array) {
    const swap = (arr, i , j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    // change code below this line
    for(let i = array.length; i > 0; i--){
       for(let j = 0; j < i - 1; j++){
           if(array[j] > array[j+1]) swap(array, j, j+1);
       }
    }
    return array;
    // change code above this line
  }
  
  console.log(bubbleSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));