let million = 1e6;
let billion = 1e9;
let trillion = 1e12;

console.log(million);

console.log( million.toString(2) );
console.log( million.toString(8) );
console.log( million.toString(10) );
console.log( million.toString(16) );

console.log(123456..toString(2)) // Double dots for raw numbers

let a = 11.5;
console.log( Math.floor(a) ); // 11
console.log( Math.ceil(a) ) // 12

a = 11.4
console.log( Math.round(a) ) // 11

a = 11.99
console.log( Math.trunc(a) ) // 11

a = 11.453921321421
console.log( a.toFixed(3) ) // 11.454

console.log(1e500) // Too big, infinity

let sum = 0.1 + 0.2;
console.log(sum) // 0.30000000000000004, not 0.3
console.log( sum.toFixed(1) ) // 0.3

console.log( isFinite("15") ); // true
console.log( isFinite("str") ); // false
console.log( isFinite(Infinity) ); // false

console.log( parseInt('100px') ); // 100
console.log( parseFloat('12.5em') ); // 12.5

console.log( parseInt('12.3') ); // 12, вернётся только целая часть
console.log( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке

console.log( parseInt('a123') ); // NaN

console.log( parseInt('0xff', 16) ); // 255
console.log( parseInt('ff', 16) ); // 255

console.log( parseInt('2n9c', 36) ); // 123456
