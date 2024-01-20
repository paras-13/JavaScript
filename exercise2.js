// Problem 1
// To find whether a person's age lies between 10 and 20 using logical properties in JS

let age = prompt("Ener your age")
age = Number.parseInt(age)
if (age >= 10 && age <= 20) {
  console.log("Your age lies between 10 to 20 age group")
}
else {
  console.log("Your age does not lie bettween 10 to 20 age group")
}


//Qs 2
// Use of switch case in JavaScript

// In switch case if any command executes than all the command written after that command get executed automatically after that, thus we use break statement after every case satement in switch

// That's the reason break is written after every switch case

let $age = prompt("What is your age?")
switch ($age) {
  case "12":
    console.log("Your age is 12")
    break
  case "13":
    console.log("Your age is 13")
    break
  case "14":
    console.log("Your age is 14")
    break
  case "15":
    console.log("Your age is 15")
    break
  default:
    console.log("Your age is not special")
}

// Qs 3
// Program to find whether a number is Divisible by 2 and 3.
let num1 = prompt("Enter a number")
if (num1 % 2 == 0 && num1 % 3 == 0) {
  console.log("Yes", num1, "is divisible by both 2 and 3")
}
else {
  console.log("No", num1, "is not divisible by 2 and 3")
}

// Qs 4
// Program to find whether a number is divisible by 2 or 3.
let num2 = prompt('Enter a number')
if (num2 % 2 == 0 || num2 % 3 == 0) {
  console.log("Yes", num2, "is divisible by 2 or 3")
}
else {
  console.log("No", num2, "is not divisible by 2 or 3")
}


// Qs 5
// Program to print you are eligible to drive or not using ternary operator

let _age = prompt("Enter your age")
console.log("You can", _age > 18 ? 'drive' : "not drive")