// Arrays are variables which can hold more than value

let marks = [91, 56, 78, 98, null, false, "Not present"]
console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks.length)
console.log(marks[7]) // Error as no element in 7th index
marks[7] = 91   // Adding value in a array
marks[5] = 23   // Making changes in array
console.log(marks[7])
console.log(typeof (marks))

// Using for loop 
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i])
}

// Using for in loop
for (let a in marks) {
  console.log(marks[a])
}

// Using for of loop
for (let b of marks) {
  console.log(b)
}