let a = 5;
let b = 2;

console.log("Addition:", a + b);        
console.log("Subtraction:", a - b);     
console.log("Multiplication:", a * b);  
console.log("Division:", a / b);        
console.log("Modulus:", a % b);         

let x = 10;
console.log("x initially:", x);

console.log("Is a > b?", a > b);        
console.log("Is a equal to b?", a === b); 

console.log("Are both a and b positive?", (a > 0) && (b > 0));

let count = 1;
count++;
console.log("After increment count:", count);
count--;
console.log("After decrement count:", count);

let message = (a > b) ? "a is greater than b" : "a is not greater than b";
console.log(message);