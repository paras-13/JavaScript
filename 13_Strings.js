// Strings in JavaScript

let name = "Paras";
let len = name.length;    // To calculatte length of the string
console.log(len)


// Traversing over a string
console.log(name[0], name[1], name[2], name[3], name[4])

// for - in loop in string
console.log("Using for-in loop in string to traverse")
for (let a in name) {          // Returns string indices as i
  console.log(name[a])
}

// for loop in string
console.log("Using for loop in string to traverse")
for (let i = 0; i < name.length; i++) {          // Returns numberes as i
  console.log(name[i])
}

// for - of loop in string
console.log("using for-lop in string to traverse")
for (let b of name) {              // Returns string values as i
  console.log(b)
}

// Template literals      // String interpulation
let boy1 = "Pramod"
let boy2 = "Nikhil"
let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

// Escape sequence
//  /n --> new line
//  /t --> tab
//  Same as python

