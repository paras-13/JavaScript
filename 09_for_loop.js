// for loop in JavaScript

// for( stat1; stat2; stat3)
// Here stat1 --> is executed one time
// stat2 --> is the condition base on which loop runs
// stat3 --> executed everytime thr loop body is executed
for (let i = 0; i < 5; i++) {
    console.log(i)
  }
  
  // Program to add first n natural numbers
  let sum = 0
  let n = prompt("Enter the value of n")
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  console.log("Sum of first", n, "natural numbers is", sum)
  
  
  // for-in loop
  // return keys of object, these loops also works with arrays
let obj = {
    paras: 95,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}
for (let a in obj) {
    console.log(a, "-->", obj[a])
  }
  
  // for-of loop
  // Only works on iterable type
  // Used in Strings or arrays
for (let b of "Harry") {
    console.log(b)
}
