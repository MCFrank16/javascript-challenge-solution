const number = (str) => {

    const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
    let counter = 1;
    let result = '';
    let reversedString = str.split('').map(el => alphabets.indexOf(el)).reverse();

    for(let i = 0; i < reversedString.length; i++){
        result += reversedString[i] + counter;
        counter++;
    }
    return result;
}

number('get');