function updateInventory(arr1, arr2) {
    // // All inventory must be accounted for or you're fired!
    // let inventory = Array.prototype.concat.apply([], arr1);

    // for(let i = 0; i < arr2.length; i++){
    //     const item = arr2[i][1];
    //     const quantity = arr2[i][0];

    //     const position = inventory.indexOf(item);

    //     // if(position !== -1){

    //     // }

    //     // console.log(position);
    // }
    // return inventory;

    let i = [[21, "Bowling Ball"]];
    let j = [[67, "Bowling Ball"]];
    
    console.log([...i, ...j]);
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

console.log(updateInventory(curInv, newInv));
