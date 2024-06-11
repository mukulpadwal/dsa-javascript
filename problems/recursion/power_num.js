// Power of a number

function powerIterative(base, power) {
  let answer = 1;

  for (let i = 0; i < power; i++) {
    answer = answer * base;
  }

  return answer;
}

function powerRecursive(base, power) {
  // Base Case
  if (power === 0) {
    return 1;
  }

  return base * powerRecursive(base, power - 1);
}

console.log(powerIterative(2, 4));
console.log(powerRecursive(2, 4));
