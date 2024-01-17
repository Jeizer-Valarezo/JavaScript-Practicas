const sum = (a, b) => a + b;
const sustract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;
const log = (value) => console.log(value);

log(divide(sustract(multiply(sum(2,4),sum(5,2)),2),5));

//((2 + 4) * (5 + 2) - 2) / 5