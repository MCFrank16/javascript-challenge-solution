/**
 *
 * Convert the characters &, <, >, " (double quote), 
 * and ' (apostrophe), in a string to their corresponding HTML entities.
 * 
 */


function convertHTML(str) {

    const htmlEntities = {
        "&": "&amp;",
        ">": "&gt;",
        "<": "&lt;",
        "'": "&apos;",
        '"': "&quot;" 
    };

    const re = /(\&|<)/;

    return str.replace(re, match => htmlEntities[match]);
}
  
convertHTML("hamburger < pizza < tacos");
