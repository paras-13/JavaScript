// 7 primitive datatypes in JavaScript

//nn bb ss u Primitive datatypes in JS

let a = null;
let b = 458;

let c = true;
let d = BigInt("569");

let e = "Paras"
let f = Symbol("I am a nice symbol")

let g = undefined
console.log(a, b, c, d, e, f, g)

console.log(typeof e)   // typeof is the keyword used to find out type of a particular element in the programme


// Non-primitive datatypes or Objects in JS
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