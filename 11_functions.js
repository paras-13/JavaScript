// functions in JavaScript
let a = 1;
let b = 2;
let c = 3;
function onePlusAvg(x, y) {
  let a = 2
  console.log(a)
  return Math.round(1 + (x + y) / 2);
}

const sum = (p, q) => {           // Another way to make function in JavaScript
  return p + q
}
const hello = () => {
  console.log("Hello!! how are you")
}

console.log(sum(4, 12))
hello()
console.log("One plus average of a and b is", onePlusAvg(a, b))
console.log("One plus average of b and c is", onePlusAvg(b, c))
console.log("One plus average of c and a is", onePlusAvg(c, a))
console.log(a)