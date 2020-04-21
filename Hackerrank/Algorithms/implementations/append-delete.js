// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
let result = '';
if(s === t) {
  result = (k >= s.length*2) || k % 2 == 0 ? 'Yes' : 'No';
} else {
 let i = 0;
while(i < s.length && i < t.length) {
    if (s[i] != t[i]) {
        break;
    }
    i++;
}
const nonMatchingInS = s.length - i;
const nonMatchingInT = t.length - i;

result = (nonMatchingInS + nonMatchingInT === k) ? 'Yes' : (nonMatchingInS + nonMatchingInT < k && (nonMatchingInT + nonMatchingInS - k) % 2 === 0) ? 'Yes' : (s.length + t.length) <= k ? 'Yes' : 'No';
}
return result;
}

appendAndDelete('hackerhappy', 'hackerrank', 9);
appendAndDelete('hackerhappy', 'hackerrank', 9);
appendAndDelete('aba', 'aba', 7);
appendAndDelete('ashley', 'ash', 2);
appendAndDelete('abcdef', 'fedcba', 15);
