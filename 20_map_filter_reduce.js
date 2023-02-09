// map, filter and reduce in JavaScript
// These functions do not make any changes in array but create a separate array

// map function
// Creates a nes array by performing some operation on each array element.
// map takes three arguments --> arr.map(value,index,array)
let arr = [45, 21, 89]
let a = arr.map((value) => {
  console.log(value)
  return value
})
console.log(a)

// filter method
// An array with values which passes a test, Creates a nnew array.
let arr2 = [11, 3, 5]
let a2 = arr2.filter((value) => {
  return value > 10
})
console.log(a2)

// reduce method
let arr3 = [1, 2, 3, 4, 5, 6, 2]
arr3.reduce((h1, h2) => {
  return h1 + h2
})