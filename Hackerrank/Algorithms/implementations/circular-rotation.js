function circularArrayRotation(a, k, queries) {

    for(let i = 0; i < k; i++){
        a.unshift(a.pop());
    }
    return queries.map(el => a[el]).join('\n');
}

circularArrayRotation([3,4,5], 2, [1,2]);