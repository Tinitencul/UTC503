function sumTo (n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
        sum += n[i];
    }
    return sum;
}
console.log(sumTo(1,2,3,4));