// for loop in JavaScript

// for( stat1; stat2; stat3)
// Here stat1 --> is executed one time
// stat2 --> is the condition base on which loop runs
// stat3 --> executed everytime the loop body is executed
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
  
  
// ! for-in loop
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

// For array -> returns index
const numbers = [25, 45, 4, 9, 16, 25];
let txt = 0;
for (let x in numbers) {
  txt += numbers[x];
}
console.log(txt);


// !for-of loop
  // Only works on iterable type
  // Used in Strings or arrays
// ? But one problem, if their is consecutive duplicate data than for-of loop will not print repeated value,
for (let b of "Harry") {        // Output --> H a r y, for-of will not take consecutive duplicate data, like r is repeated here
    console.log(b);
}

// For array
for(let b of numbers) {     
  console.log(b);
}