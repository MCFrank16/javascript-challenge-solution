// Complete the isValid function below.
function isValid(s) {
    let counter = [];
    let highestOcc = 0;
    let lessOcc = 0;

    //count the occurence and return an object of it.
    const occurenceObj = [...s].reduce((res,char) => {
        res[char] = res[char] ? res[char] + 1 : 1;
        return res;
    }, {})    
    
    // push to the counter array the occurences number
    Object.keys(occurenceObj).forEach(key => {
       counter.push(occurenceObj[key]);
    });

    highestOcc = Math.max(...counter);
    lessOcc = Math.min(...counter);
    let highCount = 0;
    let lessCount = 0;

    for(let i of counter){
        if(i == highestOcc) {
          highCount++;
        }
        if(i == lessOcc){
          lessCount++;
        }
    }

    let result = '';

    if(counter.length == 1) {
      result = 'YES';
    } else if((highestOcc - 1 == lessOcc && (highCount == 1 || lessCount == 1)) || (highestOcc == lessOcc && highCount == lessCount) || (highCount > 1 && lessCount < 2)){
      result = 'YES';
    } else {
      result = 'NO';
    }
        
    return result;

}

isValid('aaaabbcc');
isValid('abcdefghhgfedecba');
isValid('aabbcd');
isValid('aabbccddeefghi');
isValid('a');
isValid('aabbc');
isValid('xxxaabbccrry');