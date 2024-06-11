// n0 = 0
// n1 = 1
// nextelement = n1 + n0

// 0 1 1 2 3 5 8

// Iterative Approach
function fibonacciIterative(value) {
  let first = 0;
  let second = 1;

  for (let i = 2; i <= value; i++) {
    let temp = second + first;
    first = second;
    second = temp;
  }

  return second;
}

// Recursive Approach
function fibonacciRecursive(value) {
  // Base Case
  if (value <= 1) {
    return value;
  }

  return fibonacciRecursive(value - 1) + fibonacciRecursive(value - 2);
}

console.log(fibonacciIterative(5));
console.log(fibonacciRecursive(5));
