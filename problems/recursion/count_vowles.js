// Count Vowels

/**
 * @function isVowel
 * @argument character: string
 * @returns boolean
 */

function isVowel(character) {
  const vowels = "aeiou";
  const index = vowels.indexOf(character.toLowerCase());

  if (index >= 0) {
    return true;
  } else {
    return false;
  }
}

/**
 * @function countVowelsIterative
 * @argument str: string
 * @returns count: number
 */

function countVowelsIterative(str) {
  let count = 0;
  if (str.length === 0) {
    return count;
  }

  [...str].forEach((character) => {
    if (isVowel(character)) {
      count += 1;
    }
  });

  return count;
}

/**
 * @function countVowelsRecursive
 * @argument str: string
 * @returns count: number
 */
function countVowelsRecursive(str) {
  console.log(`WINDING : ${str}`);
  // Base Case
  if (str.length === 1) {
    return isVowel(str[0]) ? 1 : 0;
  }

  // Recursive Call
  let prevCount = countVowelsRecursive(str.substring(0, str.length - 1));
  // Check if the current last char is vowel or not
  let currCount = isVowel(str[str.length - 1]) ? 1 : 0;

  console.log(`UNWINDING : ${str}`);

  return currCount + prevCount;
}

/**
 * @function countVowelsRecursive2
 * @arguments str: string, count: number, index: number
 * @returns count: number
 */
function countVowelsRecursive2(str, count, index) {
  // Base Case
  if (index === str.length) {
    return count;
  }

  // Main Logic
  let currentChar = str[index];

  if (isVowel(currentChar)) {
    return countVowelsRecursive2(str, count + 1, index + 1);
  } else {
    return countVowelsRecursive2(str, count, index + 1);
  }
}

// console.log(countVowelsIterative("Mukul"));
// console.log(countVowelsRecursive("Mukul"));
console.log(countVowelsRecursive2("Mukul", 0, 0));
