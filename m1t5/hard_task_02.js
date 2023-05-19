const getMax = (x,y) => (x >= y) * x + (x < y) * y;

const getMin = (x,y) => (x >= y) * y + (x < y) * x;

console.log(getMax(10,20))
console.log(getMax(15,15))
console.log(getMin(10,20))
console.log(getMin(15,15))