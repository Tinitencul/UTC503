function squareSum (values)
{
    if (values.length <= 0){
        return 0;
    }
    let firstValue = values.shift();
    return firstValue**2 + squareSum(values);
}
console.log(squareSum([0, 3, 4, 5]));