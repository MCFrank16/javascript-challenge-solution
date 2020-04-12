/**
 * 
 * Convert the given number into a roman numeral.
 * 
 */


function convertToRoman(num) {
    const decimalValue = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    const romanNumeral = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let roman = "";

    for(let i = 0; i < decimalValue.length; i++){
        while(num >= decimalValue[i]){
            roman += romanNumeral[i];
            num -= decimalValue[i];
        }
    }
    return roman;
}
   
convertToRoman(400);
   