/**
 * Checks if a given string is a palindrome using an iterative approach.
 *
 * This function compares characters from the beginning and the end of the string,
 * moving towards the center, to check if they are the same. If any characters
 * do not match, it returns false.
 *
 * @function palindromeIterative
 * @param {string} str - The input string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 *
 * @example
 * // Example usage:
 * const result = palindromeIterative("abccba");
 * console.log(result); // Output: true
 */
function palindromeIterative(str) {
  let start = 0;
  let end = str.length - 1;

  while (start <= end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

/**
 * Checks if a given string is a palindrome using a recursive approach.
 *
 * This function compares characters from the beginning and the end of the string,
 * moving towards the center, to check if they are the same. If any characters do not match,
 * it returns false. The recursion continues until the start index exceeds the end index.
 *
 * @function palindromeRecursive
 * @param {string} str - The input string to check.
 * @param {number} start - The starting index for comparison.
 * @param {number} end - The ending index for comparison.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 *
 * @example
 * // Example usage:
 * const result = palindromeRecursive("abccba", 0, "abccba".length - 1);
 * console.log(result); // Output: true
 */
function palindromeRecursive(str, start, end) {
  // Base Case 1: If characters at start and end don't match, return false
  if (str[start] !== str[end]) {
    return false;
  }

  // Base Case 2: If start index exceeds end index, all characters have been checked
  if (start >= end) {
    return true;
  }

  // Recursive call: move towards the center
  return palindromeRecursive(str, start + 1, end - 1);
}

console.log(palindromeIterative("abccba")); // Output: true
console.log(palindromeIterative("abdcba")); // Output: false

console.log(palindromeRecursive("abccba", 0, "abccba".length - 1)); // Output: true
console.log(palindromeRecursive("abdcba", 0, "abdcba".length - 1)); // Output: false
