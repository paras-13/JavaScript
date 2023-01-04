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
//We cannot re-declare let
// let help us to create global and local variable
// Once a variable is declared under let than no need to declare it again.

// var is just used to create a variable, it does not change value in case of local or global variable

// So here a is declared inder var so its value get changed even after defining inside a block
// Thus var does not support local and global level of declaring a variable.
// We cant define constant identifier later, it is to be defined at the mon=ment
const author = "Paras"
// const is used to reserve an identifier so that user can't make any changes into it later.
// User can not declare this identifier inside let or var later.
//const author = "Upadhyay"   Also we cannot redefine a variable defined under const

console.log(author)
//let author = "Author"    // This will through an error
//console.log(author)