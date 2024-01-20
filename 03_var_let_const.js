console.log("JavaScript tutorial 3: var, lett, const")
var a = "Hello"
let b = "Paras"
let c;
{
  var a = "World"
  let b = "Upadhyay"
  console.log(a)      
  console.log(b)
}
console.log(a)
console.log(b)
// Block Scope was introduced in JS in 2015, replacing the previous Global and Function block scopes.
// Variables declared with 'let' cannot be re-declared in the same scope, promoting better scoping practices.
// 'let' allows us to create both global and local variables, enabling more granular control over variable visibility.
// Once a variable is declared using 'let', there is no need to redeclare it.

// 'var' is used to create a variable, but it doesn't respect block scope, 
//      leading to value changes in both local and global variables.
// 'var' doesn't support proper local and global variable declaration, making it less preferable than 'let'.
// It is recommended to use 'let' or 'const' instead of 'var' for more predictable variable behavior.

// Here, 'a' is declared using 'var', so its value can change even after being defined inside a block.
// This highlights that 'var' doesn't adequately support local and global variable declaration.
// It is advisable to use 'let' or 'const' for a more robust and predictable scoping mechanism.

// Constant identifiers, declared with 'const', must be defined at the moment of declaration.
const author = "Paras";
// 'const' is used to reserve an identifier, preventing any changes later.
// You cannot declare this identifier using 'let' or 'var' afterward.
// const author = "Upadhyay"; // This will throw an error.

// Also, one cannot redefine a variable defined with 'const'.
console.log(author);
// let author = "Author"; // This will throw an error.
// console.log(author);