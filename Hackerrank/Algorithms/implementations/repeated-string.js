// Complete the repeatedString function below.
function repeatedString(s, n) {
    let x = Math.floor(n / s.length);
    let count = (s.split('a').length - 1) * x;
    let rem = n % s.length;

    for (var i = 0; i < rem; i++) { if (s.charAt(i) === "a") count++; }
    return count;
}

repeatedString('aba', 10);
