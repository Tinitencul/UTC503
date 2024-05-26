const input = [1,-4,12,0,-3,29,-150];
const filter = input.filter(function (i){ return i > 0;});
const reducefilt = filter.reduce((a, b) => a + b, 0);
console.log(reducefilt);

