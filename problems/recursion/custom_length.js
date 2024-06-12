// Implement a function that returns length of a string

/**
 * Calculates the length of a given string using a recursive approach.
 *
 * This function recursively processes each character of the input string by removing the
 * first character and counting the remaining characters until the string is empty.
 *
 * @function strLengthRecursive
 * @param {string} string - The input string whose length is to be calculated.
 * @returns {number} - The length of the input string.
 *
 * @example
 * // Example usage:
 * const length = strLengthRecursive("hello");
 * console.log(length); // Output: 5
 */
function strLengthRecursive(string) {
  // Base Case: if the string is empty, return 0
  if (string === "") {
    return 0;
  }

  // Recursive Case: count the first character and add the length of the remaining string
  return 1 + strLengthRecursive(string.substring(1));
}

const length = strLengthRecursive("hello");
console.log(length); // Output: 5
