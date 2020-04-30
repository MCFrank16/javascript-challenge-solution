// Complete the catAndMouse function below.
function catAndMouse(x, y, z) {    
    console.log(Math.abs(z - x) > Math.abs(z - y) ? 'Cat B' : (Math.abs(z - x) == Math.abs(z - y)) ? 'Mouse C' : 'Cat A');
}

catAndMouse(1, 2, 3);
catAndMouse(1, 3, 2);
