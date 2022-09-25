const x = 1;
const y = 4;

function getSumDeclaration(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
} // function declaration

let getSumExpression = function(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
} // function expression

let getSumArrow = (firstNumber, secondNumber) => firstNumber + secondNumber; // arrow function



console.log(getSumDeclaration(x, y));
console.log(getSumExpression(x, y));
console.log(getSumArrow(x, y));