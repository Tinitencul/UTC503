const input = [12,46,32,64];
mean = input.reduce((sum, number) => sum + number, 0) /4;
const roundmean = Math.round(mean)
console.log(mean);
console.log(roundmean)

