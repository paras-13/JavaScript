// Datatypes in JS
// Two types of data types in JS
//        1-> Primitive Datatypes         2-> Non-Primitive Datatypes


// 7 primitive datatypes in JavaScript
/*
  -> Number
  -> null
  -> BigInt
  -> Boolean
  -> String
  -> Symbol
  -> Undefined
*/
//nn bb ss u Primitive datatypes in JS

let a = null;                           // NULL
let b = 458;                            // Number

let c = true;                           // Boolean
let d = BigInt("569");                  // BigInt

let e = "Paras"                         // String
let f = Symbol("I am a nice symbol")    // Symbol

let g = undefined                       // Undefined
console.log(a, b, c, d, e, f, g)

console.log(typeof e)   // typeof is the keyword used to find out type of a particular element in the programme


// Non-primitive datatype or Objects in JS
const item = {
  "Paras": true,
  "Shubh": false,
  "Lovish": 67,
  "Rohan": undefined
}
console.log(item["Rohan"])
console.log(item["Paras"])
console.log(item["Shubh"])
console.log(item["Lovish"])