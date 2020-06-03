// this solution is implemented using the radix sort algorithm
// time complexity is O(nk)

function findMedian(arr){
    const getDigits = (num, i) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
    const digitCount = (num) => (num === 0) ? 1 : Math.floor(Math.log10(Math.abs(num)));
    const mostNumbers = (num) => num.map(el => digitCount(el)).reduce((a,b) => Math.max(a, b));

    const longNumber = mostNumbers(arr);
    for(let k = 0; k < longNumber; k++){
        let digitArr = Array.from({ length : 10}, () => []);

        for(let i = 0; i < arr.length; i++){
            let digit = getDigits(arr[i], k);
            digitArr[digit].push(arr[i]);
        }

        arr = [].concat(...digitArr);
    }
    console.log(arr);
    return arr[Math.floor(arr.length / 2)];
}

console.log(findMedian([4,456,2,36,758,1341388]));