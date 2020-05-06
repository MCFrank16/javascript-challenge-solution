// Complete the angryProfessor function below.
function angryProfessor(k, a) {
  return !(a.filter(el => el <= 0).length >= k) ? 'YES' : 'NO';

}

console.log(angryProfessor(3, [-1,-3,4,2]))