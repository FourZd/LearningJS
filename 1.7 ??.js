let a = 3, b = 8;
c = a ?? b;
console.log(c); // 3

a = null, b = 8;
c = a ?? b;
console.log(c); // 8

a = undefined, b = 8;
c = a ?? b;
console.log(c); // 8