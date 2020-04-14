function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for(let i = 0; i < arr2.length; i++){
        console.log(arr2[i]);
    }
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

updateInventory(curInv, newInv);
