// Arrays methods in JavaScript
let num = [1, 2, 3, 34, 4]
let num2 = [4, 6, 8, 9, 7]

// "toString function"
let b = num.toString()
console.log(b)

// "join function"
let c = num.join("_")
console.log(c)

// "pop function"    
let r = num.pop()
console.num(r)
console.log(num)

// "push function"
num.push(56)   // To push element in array at last
console.log(num)

// "shift function"
// Removes first element and returns it
let q = num.shift()
console.log(q, num)

// "unshift function"
// Add an element at the beginning of an array
let s = num.unshift(78)
console.log(num)

// "concat function"
// To add one or more array together; it returns a new array.
// No changes in num and num2 array
let t=console.log(num.concat(num2))

// delete    Length of array is not changed even after deleting the element in JS
delete num[0]
console.log(num2)

// "sort function"
//But not in ascending order it sorts alphabetically number wise like ; for eg:
arr = [2,5,6,45,122,9,7]
// Make changes to original array
arr.sort()
console.log(arr)

// Now if we want to arrange them in ascending order we provide it a compare function
// eg:
arra = [1,5,9,122,7,3,658]
function compare(a, b){
  return a-b    // to make it descending we use b-a
}
arra.sort(compare)
console.log(arra)
// Thus by using compare function we can arrange an array in ascending or descending order using sort function


// "reverse function"
// Reverse function used to reverse an array
arr.reverse()
console.log(arr)


// "splice function"
// Use to add new items to an array.
//splice(a,b,c1,c2,c3,c4,c5,c6.......cn)
// Here a --> position/index where we want to add.
// b --> how many element you want to remove starting with "a" index.
// c1,c2,c3....cn--> New elements which you want to add from starting index a
const numbers = [1,2,3,4,5]
let deletedinput = numbers.splice(2,2,23,24)  // Modify source array and returns deleted inputs
console.log(numbers)
console.log(deletedinput)

// "slice function"
// To slice elemts from an array and make separate array for them same as alice function used in strings
ne = arr.slice(1,5)
// Will create an array from index 1 to 4(excluding 5)
console.log(ne)