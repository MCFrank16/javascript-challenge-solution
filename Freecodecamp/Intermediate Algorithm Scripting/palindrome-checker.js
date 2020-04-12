/**
 * 
 * You'll need to remove all non-alphanumeric characters (punctuation, 
 * spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
 * 
 * We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
 * 
 * 
 * We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

 */

function palindrome(str) {
    
    const clearStr = str.toLowerCase().replace(/[\W_]/g, "");

    return clearStr === clearStr.split("").reverse().join("");
}
  
  
  
  palindrome("0_0 (: /-\ :) 0-0");
  palindrome("eye");
  palindrome("race car");
  palindrome("_eye");
  palindrome("A man, a plan, a canal. Panama");
  palindrome("almostomla");