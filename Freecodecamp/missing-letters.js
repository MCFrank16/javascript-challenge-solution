
/**
 *
 * Find the missing letter in the passed letter range and return it.
 * If all letters are present in the range, return undefined.
 * 
 */
function fearNotLetter(str) {
    const charCodes = [...str].map(e => e.charCodeAt(e));

    for (let i = 0; i < charCodes.length; i++)
        if(charCodes[i + 1] - charCodes[i] > 1) {
            return String.fromCharCode(charCodes[i + 1] - 1);
        }
}
  
fearNotLetter("stvwx");
