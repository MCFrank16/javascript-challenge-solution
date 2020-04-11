
/**
 *
 *
 * Return an English translated sentence of the passed binary string.
 * The binary string will be space separated.
 * 
 */
function binaryAgent(str) {
   return str.split(" ").map(e => String.fromCharCode(parseInt(e, 2))).join("");
}
  
binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001");