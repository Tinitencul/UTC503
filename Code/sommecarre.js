function squareSum (value)
{
    let res = 0;
    for (let value of values) {
        res += value**2;
    }
    return res;
}
console.log(squareSum([0, 3, 4, 5]))