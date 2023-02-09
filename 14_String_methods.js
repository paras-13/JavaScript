// String methods in JavaScript
// Properties and methods

// charAt 
let chr = "Paras".charAt(0)
console.log(chr)

// indexof
let ind = "Paras"
console.log(ind.indexOf("a"))

// lastIndexOf
console.log("package".lastIndexOf("a"))    // index number from last

// startsWith, endsWith
console.log("Vineet".startsWith("in"))
console.log("Vineet".endsWith("eet"))

// includes
// checks for substring in string
console.log("Hello world!! How are you?".includes("llo w"))

// repeat
console.log("Hello JS!!".repeat(3))

// length
let name1 = '"Paras"'
console.log(name1.length)

// toUpperCase
console.log(name1.toUpperCase())

// toLowerCase
console.log(name1.toLowerCase())

// slice
console.log(name1.slice(2,5))
console.log(name1.slice(2))

//  replace
console.log(name1.replace("as","u"))

// concat
let friend = "Utkarsh"
console.log(name1.concat(" is a friend of ",friend))

// trim
let name2 = "    Harsh"
console.log(name2.trim())  // Remove Whitespaces
let name3 = "Harsh      "
console.log(name3.trim())