/** 
 * 
 * Fill in the object constructor with the following methods below:
 * getFirstName()
 * getLastName()
 * getFullName()
 * setFirstName(first)
 * setLastName(last)
 * setFullName(firstAndLast)
 * 
*/

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast.split(" ");

    this.getFullName = () => fullName[0] + " " + fullName[1];
    this.getFirstName = () => fullName[0];
    this.getLastName = () => fullName[1];

    this.setFirstName = (name) => fullName[0] = name;
    this.setLastName = (name) => fullName[1] = name;
    this.setFullName = (names) => fullName = names;

};
  
  var bob = new Person('Bob Ross');
  bob.getFullName();