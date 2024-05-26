function pow(x, n) {
    if (n == 2) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}
console.log(pow(2,3));