// Datatype Number
/*
    Primitive Datatype
    Supports --> Decimal, Octal, Binary and HexaDecimal
*/

// Decimal Numbers: 
// Used to represent numeric values, including both integers and floating-point numbers
let a=33;
let b=33.5;
console.log(a, typeof a);
console.log(b, typeof b);

// Octal Number:
// Starts with 0o and the following numbers are smaller than 8
let c=0o562;
console.log(c, typeof c);

// Binary Number
// Starts with 0b and followed bu 0's and 1's
let d=0b101100;
console.log(d, typeof d);

// HexaDecimal Number
// Starts with 0x or 0X followed by any digit belonging (0123456789ABCDEF) 

let e=0xfff1a
console.log(e, typeof e);

// Integer Precision
// Integers are accurate upto 15 digits
let f=999999999999999;    
let g=9999999999999999;   
console.log(f);           // output --> 999999999999999
console.log(g);           // output --> 10000000000000000

/* 
 !Adding numbers and string

 * JavaScript uses the + operator for both addition and concatenation.
 * Numbers are added. Strings are concatenated.

 * Some cases for this:- 
*/

// add two numbers, the result will be a number:
let num1=10;
let num2=20;
console.log(num1+num2, typeof(num1+num2));

// Add two strings, the result will be a string concatenation:
num1="10";
num2="20";
console.log(num1+num2, typeof(num1+num2));

// Add a number and a string, the result will be a string concatenation:
num1 = 10;
num2 = "20";
console.log(num1+num2, typeof(num1+num2));

// A common mistake is to expect this result to be 30:
num1 = 10; num2 = 20;
let res = "The result is " + num1 + num2;
console.log(res, typeof(res));
/* 
 * This happened because in JavaScript, when we use + operator with a string and a non-string (like a number),
 * JavaScript implicitly converts the non-string  to a string and performs string concatenation.
 */

// Another similar case
num1 = 10; num2 = 20;
let num3 = "30";
res = num1+num2+num3;
console.log(res, typeof(res)); // Result is 3030 not 102030

/*
 * The result is 3030 because the addition starts with numeric values (num1 and num2),resulting in 30.
 * Then, this numeric result is concatenated with the string num3, creating the string "3030".

 * If the order of addition was different, for example, num3 + num2 + num1, the result would be "302010".
 * In this case, the addition starts with the string num3, and JavaScript then performs string concatenation throughout the operation.
 * 
 ?NOTE: The JavaScript interpreter works from left to right.
 ?      First 10 + 20 is added because x and y are both numbers.
 ?      Then 30 + "30" is concatenated because z is a string.
*/

// ! Numeric Strings

num1 = 100;       // Number
num2 = "100";       // String

// ? But JavaScript will try to convert strings to numbers in all numeric operations except +
num1 = "100";
num2 = "10";
// /, * and - operator will work
console.log(num1/num2, typeof(num1/num2));         // Output = 10
console.log(num1*num2, typeof(num1*num2));         // Output = 1000
console.log(num1-num2, typeof(num1-num2));         // Output = 90

// But for + it acts as a concatenation operator
console.log(num1+num2, typeof(num1+num2));         // Output = 10010