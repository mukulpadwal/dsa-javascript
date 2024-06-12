// task is to remove all the duplicate adjacent elements

/**
 * Removes adjacent duplicate characters from a string using an iterative approach.
 *
 * This function uses a queue (array) to process each character of the input string.
 * It pushes the character to the queue only if it is different from the last character
 * in the queue, thereby ensuring no adjacent duplicates are added.
 *
 * @function removeAdjDuplicates
 * @param {string} str - The input string from which adjacent duplicates will be removed.
 * @returns {string} - The resulting string with all adjacent duplicates removed.
 *
 * @example
 * // Example usage:
 * const result = removeAdjDuplicates("aabcbcc");
 * console.log(result); // Output: "abcbc"
 */
function removeAdjDuplicates(str) {
  // Initialize an empty queue (array) to store characters
  let q = [];

  // Iterate through each character in the input string
  for (let i = 0; i < str.length; i++) {
    let currChar = str[i];

    // Push the current character to the queue if it's not the same as the last one
    if (q[q.length - 1] !== currChar) {
      q.push(currChar);
    }
  }

  // Join the characters in the queue to form the resulting string
  return q.join("");
}

/**
 * Removes adjacent duplicate characters from a string using a recursive approach.
 *
 * This function processes each character of the input string recursively. It constructs
 * a new string by adding the current character only if it is different from the last
 * character added, thereby ensuring no adjacent duplicates are included.
 *
 * @function removeAdjDuplicatesRecursive
 * @param {string} str - The input string from which adjacent duplicates will be removed.
 * @param {string} ans - The accumulator string where the result is built. This should be initialized as an empty string when the function is first called.
 * @param {number} idx - The current index being processed in the input string. This should be initialized as 0 when the function is first called.
 * @returns {string} - The resulting string with all adjacent duplicates removed.
 *
 * @example
 * // Example usage:
 * const result = removeAdjDuplicatesRecursive("aabcbcc", "", 0);
 * console.log(result); // Output: "abcbc"
 */
function removeAdjDuplicatesRecursive(str, ans = "", idx = 0) {
  // Base Case: if we've reached the end of the string, return the accumulated result
  if (idx === str.length) {
    return ans;
  }

  // Get the current character at the specified index
  let currChar = str[idx];

  // If the last character in the accumulator is the same as the current character, skip it
  if (ans[ans.length - 1] === currChar) {
    return removeAdjDuplicatesRecursive(str, ans, idx + 1);
  } else {
    // Otherwise, add the current character to the accumulator and move to the next character
    return removeAdjDuplicatesRecursive(str, ans + currChar, idx + 1);
  }
}

let str = "aabcbcc";

console.log(removeAdjDuplicates(str)); // Output: "abcbc"
console.log(removeAdjDuplicatesRecursive(str, "", 0)); // Output: "abcbc"
