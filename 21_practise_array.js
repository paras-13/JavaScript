// Qs1
// Create an array of numbers and take input from the user to add number to this array.

let arr =[1,5,6,7,8,9,10];
console.log(`Array before changes --> ${arr}`);
let n = prompt("Enter how many numbers you want to add in this array  =");
for (let i=1;i<=n;i++)
{
    let num = prompt(`${i}st number`);
    n = Number.parseInt(a);
    arr.push(num);
}
console.log(`Resultant array is ${arr}`);

// Qs2
// Same program as above just keep enttering numbers to the array until 0 is entered
let j=1;
console.log("Add numbers into the array")
while (j!=0){
  n2 = prompt(`Enter number ${j}`);
  n2 = Number.parseInt(n2);
  if (n2 != 0)
    arr.push(n2);
  else
    break;
  j++;
}
console.log(`New array = ${arr}`);


// Qs3 
// Filter for number divisible ny 10
let array = [1,5,10,56,40,80,25,60,98,100];
let bool = array.filter((x) =>{
  return x%10 == 0;
})
console.log(bool);


//Qs 4
// Create an array of square of given numbers
// from arr created in Question 1
let square = arr.map((x)=>{
  return x*x
})
console.log(square)

// Qs 5
// Use reduce to calculate factorial of a given number from an array of first n natural numbers
let a = [1,2,3,4];
let fact = a.reduce((x1,x2)=>{
  return x1*x2;
})
console.log(fact);