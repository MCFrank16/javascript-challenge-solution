// Complete the designerPdfViewer function below.
function designerPdfViewer(h, word) {
 const arr = h.split(" ");
 const splitWord = word.split("");
 const alphabet = 'abcdefghijklmnopqrstuwvxyz'.split("");
 const indices = splitWord.map(el => alphabet.indexOf(el)).map(el => Number(arr[el]));
 
 return Math.max(...indices) * word.length;

}

console.log(designerPdfViewer("1 3 1 3 1 4 1 3 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5", "abc"));