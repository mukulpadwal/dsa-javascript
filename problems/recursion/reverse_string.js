// string = "mukul"
//           01234

let str = "Mukul";

// Iterative Appproach
function reverseStringIterative(str) {
  let answer = "";

  for (let i = 0; i < str.length; i++) {
    answer = str[i] + answer;
    // answer = answer + str[i];
  }

  return answer;
}

// Recursive Approach 1
function reverseStringRecursive(str) {
  // Base Case
  if (str.length === 0) {
    return "";
  }

  // function call
  let reversePart = reverseStringRecursive(str.substring(0, str.length - 1));

  // Last character of the string at this point
  let lastChar = str[str.length - 1];

  // generating and returing a new string in reverse manner
  return lastChar + reversePart;
}

// Recursive Approach 2
function reverseStringRecursive2(str, idx, answer) {
  if (idx < 0) {
    return answer;
  }

  let currentChar = str[idx];
  return reverseStringRecursive2(str, idx - 1, answer + currentChar);
}

console.log(reverseStringIterative(str));
console.log(reverseStringRecursive(str));
console.log(reverseStringRecursive2(str, str.length - 1, ""));
console.log([...str].reverse().join(""));
