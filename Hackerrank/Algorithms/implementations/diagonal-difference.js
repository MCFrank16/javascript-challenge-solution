/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let L2R = 0;
    let R2L = 0;

    for(let i = 0; i < arr.length; i++){
        L2R += arr[i][i];

        R2L += arr[i][arr.length - 1 - i];
    }
    
    console.log(Math.abs(L2R - R2L));
}

diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]);

// 6 6 7 1 9 3 8 9 1
// 9 7 1 6 4 1 6 1 1
// 1 2 4 6 1 4 6 3 9
// 8 7 6 1 6 6 6 7 2
// 1 4 9 1 i 8 5 3 5
// 8 3 4 2 3 7 5 1 5
// 2 7 4 8 3 1 8 2 3
// 3 4 6 7 7 8 3 9 6
// 2 0 5 4 4 4 3 3 0