// Complete the bonAppetit function below.
function bonAppetit(bill, k, b) {
    let annaNoEat = bill[k];
    let result;
    const billSum = bill.reduce((tot, val) => tot += val, 0);
    const sharedItemBill = (billSum - annaNoEat) / 2; 
    (sharedItemBill != b) ? result = Math.abs( b - sharedItemBill) : result = 'Bon Appetit';
    console.log(result);
}
bonAppetit([3,10,2,9], 1, 12);
bonAppetit([3,10,2,9], 1, 7);