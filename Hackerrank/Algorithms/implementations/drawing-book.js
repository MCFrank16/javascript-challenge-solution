/*
 * Complete the pageCount function below.
 */
function pageCount(n, p) {
    /*
     * Write your code here.
     */
    const fromStart = Math.floor(p / 2);
    const fromEnd = Math.floor((n / 2) - fromStart);

    return Math.min(fromStart, fromEnd);

}

pageCount(6,2);