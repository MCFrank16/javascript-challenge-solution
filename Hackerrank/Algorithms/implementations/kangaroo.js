// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
   // If kangaroo 1 jumps longer than 2 and the remainder of difference 
  // of their starting positions and velocities are 0, then output YES else NO. 

  return (v1 > v2 && (x2 - x1) % (v1 - v2) == 0) ? 'YES' : 'NO';
}

kangaroo(0,3,4,2);

// solution inspired by Matin Fazli
// https://github.com/matinfazli/HackerRank/blob/master/algorithms/02-implementation/04-kangaroo/solution.js
