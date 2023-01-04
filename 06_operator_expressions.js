// 77;
// "Paras"   Valid JavaScript Program( Will not through an error)
// true


// Arithmetic Operators

console.log("Operators in JS")
let a = 10;
let b = 4;

console.log("a + b", a + b)
console.log("a - b", a - b)
console.log("a / b", a / b)
console.log("a * b", a * b)
console.log("a ** b", a ** b)     // exponent
console.log("a % b", a % b)     // mod

// Increament and Decrement operators
console.log("++a", ++a)    // result is 11
console.log("a++", a++)    // result is 11 but coming value of a get updated to 12
// Same goes for a-- and --a
console.log("--a", --a)    // result is 11
console.log("a--", a--)     // result is 11 and value updated to 10
console.log(a)          // result is 10

// Difference between ++a and a++ operators
// ++a operator will change the value at the moment and shows output in the console --- while a++ will update the value for the next call and will not show any change in the console at the moment when it is being called.

// Assignment Operators
let ele = 5;
ele += 5
console.log(ele)

// Similar operators -- > -=, *=, /=, %=, **=

//Comparison Operators
let comp1 =6;
let comp2 =6;
console.log(comp1 == comp2);    // Equal to
console.log(comp1 != comp2);    // Not equal to
console.log(comp1 === comp2);    // Equal to checks number as well datatype 
console.log(comp1 !== comp2);    // Not equal to checks datatype as well

/* Difference between == and === operator
For eg:--
Let say comp1 = 6 and comp2 = "6"
Here 6 is of number type and "6" is of string type 
In this case == operator will give true but === operator will give false
=== will actually checks for equality and == operator only checks data irrespective of data type */

// Similar difference foe =! and ==! operators

// Others operators :-- <, >, <=, >=, ?(turnary operator)

// ---------- Logical Operators-----------------
let x =5;
let y =6;
console.log(x<y && y>x)     //   && for logical and
console.log(x<y || y<x)     //   || for logical or
console.log(!(x>y))     //   ! for logical not


// ------------ Comments in JS ------------------
console.log("For single line comment // is used")
console.log("For multi line comment /*  */ is used")
