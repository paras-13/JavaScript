let a = prompt("Hey what's your age");  // Input from user (Type is always string type)
console.log(typeof a);

a = Number.parseInt(a);      // Converting string to number type
console.log(typeof a);


if (a > 18)                    // if
{
  if (a > 30) {
    alert("You are an adult")                 // Nested
  }
  else {
    alert("You are young")
  }
}
else if (a < 18 && a > 15) {                           // else if statement
  alert("You are a teenage")
}
else {
  alert("This is not a valid age");         // else
}

// Switch 
const expr = "papayas"
switch(expr) {
  case "oranges":
    console.log("Oranges are $0.59 a pound")
    break;
  case "Mangoes":
  case "Papayas":
    console.log("Mangoes and Papayas are $2.79 a pound")
    break;
  default:
    console.log(`Sorry, we are out ${expr}.`)
}

// Ternary operator
// Evaluates a condition and block of code based on the condition
console.log("You can",(a<18? "drive": "not drive"))
