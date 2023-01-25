// Arrays methods in JavaScript
let num = [1, 2, 3, 34, 4]
let num2 = [4, 6, 8, 9, 7]


// toString
let b = num.toString()
console.log(b)

// join
let c = num.join("_")
console.log(c)

// pop    
let r = num.pop()
console.num(r)
console.log(num)

// push
num.push(56)   // To push element in array at last
console.log(num)

// shift
// Removes first element and returns it
let q = num.shift()
console.log(q, num)

// unshift
// Add an element at the beginning of an array
let s = num.unshift(78)
console.log(num)

// concat
// To add one or more array together; it returns a new array.
// No changes in num and num2 array
let t=console.log(num.concat(num2))

// delete    Length of array is not changed even after deleting the element
delete num[0]
console.log(num2)

// sort
/* But not in ascending order it sorts alphabetically number wise like ; for eg:
let a function be */
// Make changes to original array
console.log(num.sort())
