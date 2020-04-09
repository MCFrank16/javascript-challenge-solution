/** 
 * Make a function that looks through an array of objects (first argument) and returns an
 * array of all objects that have matching name and value pairs (second argument). Each
 * name and value pair of the source object has to be present in the object from the
 * collection if it is to be included in the returned array.
 * For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], 
 * and the second argument is { last: "Capulet" }, 
 * then you must return the third object from the array (the first argument), 
 * because it contains the name and its value, that was passed on as the second argument.
 */

function whatIsInAName(collection, source) {
    const srcKeys = Object.keys(source);
    return collection.filter(e => srcKeys.every(key => e.hasOwnProperty(key) && e[key] === source[key]));
}

whatIsInAName([{ "apple": 1, "bat": 2 },
{ "bat": 2 }, 
{ "apple": 1, "bat": 2, "cookie": 2 }], 
{ "apple": 1, "bat": 2 });