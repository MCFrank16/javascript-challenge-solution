// Complete the formingMagicSquare function below.
function formingMagicSquare(s) {
    // our predetermined valid magic square
    const magicSquare = [[8,3,4], [1,5,9], [6,7,2]];

    let i = 0;
    let syDiff = []; // this will hold symmetrical element from both arrays.

    do {

        magicSquare[i].filter(el => !s[i].includes(el)).reduce((a,b) => syDiff.push(a + b) ,0);
        s[i].filter(el => !magicSquare[i].includes(el)).reduce((a,b) => syDiff.push(a + b) ,0);
        
        i++;

    } while (i < s.length);

    console.log(syDiff.reduce((res,el) => Math.abs(res - el), 0));
}

formingMagicSquare([ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 5] ]);