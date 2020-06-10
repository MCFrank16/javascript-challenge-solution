function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let curr = arr[i];

        for(let j = i - 1; j >= 0 && arr[j] > curr; j--){
            arr[j+1] = arr[j];
            console.log(arr.toString().replace(/\,/g, ' '));
        }
    }
    console.log(arr.toString().replace(/\,/g, ' '));
}

insertionSort([2, 4, 6, 8, 3])