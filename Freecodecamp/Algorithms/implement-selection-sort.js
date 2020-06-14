function selectionSort(array) {
    const swap = (arr, i , j) => [arr[i], arr[j]] = [arr[j], arr[i]];
    // change code below this line
    for(let i = 0; i < array.length; i++){
        let min = i;
        for(let j = i + 1; j < array.length; j++){
           if(array[j] < array[min]) min = j; 
        }

        i !== min && swap(array, i, min);
    }
    return array;
    
    // change code above this line
  }
  
  
console.log(selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]));