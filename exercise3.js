// Exercise chapter3

// Qs 1
// program to display the marks of a student in an object using for-in loop

const obj = {
    harry: 98,
    aakash: 70,
    sachin: 45,
    nikhil: 80
  }
  for (let a in obj) {
    console.log("Marks of", a, "are -->", obj[a])
  }
  
  // using for loop
  let arr = Object.keys(obj)    // array is created 
  for (let i = 0; i < arr.length; i++) {     // .length to calculate length of array
    console.log("Marks of " + arr[i] + " are " + obj[arr[i]])
  }
  // Display try again until the user enter a correct number
  let correct_num = 56
  let user_num = prompt("Choose a number")
  while (user_num != correct_num) {
    console.log("Try again")
    user_num = prompt("Choose a number")
  }
  console.log("You guessed it right!!")
  
  // Function to find mean of 5 numbers
  
  
  function mean(n1,n2,n3,n4,n5){
    return (n1+n2+n3+n4+n5)/5
  }
  console.log(mean(1, 2, 3, 4, 5))