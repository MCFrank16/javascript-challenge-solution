function insertionSort(arr){
    for(let i = 0; i < arr.length; i++){
        let curr = arr[i];
        let j = i;
        while(j > 0 && arr[j] < arr[j-1]){
            let temp = arr[j];
            arr[j] = arr[j-1];
            arr[j-1] = temp;
            j--;
        }
        if(i !== 0) console.log(arr.toString().replace(/\,/g, ' '));
    }
}


insertionSort([1, 4, 3, 5, 6, 2])

