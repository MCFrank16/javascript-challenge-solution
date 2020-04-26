// Complete the encryption function below.
function encryption(s) {
    const clearStr = s.replace(/\s/g, ""); // remove all the white space within the string.
    const rows = Math.floor(Math.sqrt(clearStr.length)); // compute the number of rows.
    const columns = Math.ceil(Math.sqrt(clearStr.length)); // compute the number of columns.
    let re = '';
    let i = 0;
    let res = [];
    let encrypt = '';

    if((rows * columns >= clearStr.length) || (rows * columns <= clearStr.length)) {
        re = new RegExp(`\\w{1,${columns}}`, "g"); //regex to split the string based on the numbers of rows.
    }

    encrypt = clearStr.match(re).join(" "); // splitted word.

    while(i < encrypt.length){
       res.push(encrypt.match(/\b\w/g).join("")); // push to the array every match of the first characters.
       encrypt = encrypt.replace(/\b\w/g, ""); // replace all the first character with a white space so that we can keep matching the first character.
       i++;
    }

    return res.join(" "); // join the string in the array to return a new encrypted word.
}

encryption('if man was meant to stay on the ground god would have given us roots');
encryption('chillout');
encryption('feedthedog');
encryption('haveaniceday');
encryption('roqfqeylxuyxjfyqterizzkhgvngapvudnztsxeprfp');
encryption('iou');
