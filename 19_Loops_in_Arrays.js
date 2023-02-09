// for loop with array
// Arrays can be looped by using classical JavaScript for loop or by some methods:-

// Using for loop
let num = [3, 54, 1, 2, 4]
for (let i = 0; i < num.length; i++) {
  console.log(num[i])
}

// ForEach loop
num.forEach((ele) => {
  console.log(ele)
})
// Printing square of each element usin ForEach loop
num.forEach((ele) => {
  console.log(ele * ele)
})

// Array.from
let name = "Paras"
let arr = Array.from(name)
console.log(arr)

// for of loop
for (let i of num) {
  console.log(i)
}
// for in loop
for (let i in num) {
  console.log(num[i])
}