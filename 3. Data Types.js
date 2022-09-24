"use strict";

/*
JS is dynamically-typed
*/
let message = "hello"; 
message = 123456; // You can change var type

let infinity = Infinity; // Infinity
console.log(1 / 0); // Also infinity

let negativeInfinity = -Infinity;
console.log(negativeInfinity); // Negative infinity

let notANumber = NaN; 
console.log(notANumber); // Not-a-Number
console.log('Not a number' / 2); // Also not a number
console.log(NaN + 1); // And also not a number

console.log(NaN ** 0); // 0 power is 1. Quick math!

/*
JS is math-safe. It's not gonna crash, but it can return NaN.
*/

console.log(1 / 0);
console.log('String' * 2);

let bigInt = 99999999999999999999999999999999999999999999999999n; // Add n to make it big
console.log(bigInt ** 5n); // It cant be mixed to another types

// Use dollar sign to insert value into string
let phrase = `For example ${true}`;
console.log(phrase);

// None
let doesNotExist = null;
console.log(doesNotExist);

// Undefined
let undefined;
console.log(undefined);

// typeof operator
console.log(typeof(null)) // null is object. JS bug.