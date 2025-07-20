let number1 = prompt("Enter the first number:");
let number2 = prompt("Enter the second number:");

number1 = Number(number1);
number2 = Number(number2);

const operatorList = ['+', '-', '*', '/', '%']; // List of operations

let sum = number1 + number2;
let difference = number1 - number2;
let product = number1 * number2;
let quotient;
let remainder;

if (number2 !== 0) {
    quotient = number1 / number2;
    remainder = number1 % number2;
} else {
    quotient = "undefined (cannot divide by zero)";
    remainder = "undefined (cannot divide by zero)";
}

console.log("------ Calculator Results ------");
console.log(number1 + " + " + number2 + " = " + sum);        // Addition
console.log(number1 + " - " + number2 + " = " + difference); // Subtraction
console.log(number1 + " * " + number2 + " = " + product);    // Multiplication
console.log(number1 + " / " + number2 + " = " + quotient);   // Division
console.log(number1 + " % " + number2 + " = " + remainder);  // Modulus

var exampleVar = "This uses 'var'";
let exampleLet = "This uses 'let'";
const exampleConst = "This uses 'const'";

console.log(exampleVar);
console.log(exampleLet);
console.log(exampleConst);
