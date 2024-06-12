// Task is to remove " " and "\t" present in the given string

let str = "mu    kul\tpa d\twal";

/**
 * Removes all whitespace and tab characters from a given string.
 *
 * This function takes a string as input and returns a new string with all
 * whitespace characters (spaces, tabs, newlines, etc.) and tab characters removed.
 * It uses regular expressions to identify and replace these characters.
 *
 * @function removeSpaceAndTabs
 * @param {string} str - The input string from which spaces and tabs will be removed.
 * @returns {string} - The resulting string with all spaces and tabs removed.
 *
 * @example
 * // Example usage:
 * const result = removeSpaceAndTabs("Hello\t World\n");
 * console.log(result); // Output: "HelloWorld"
 */
function removeSpaceAndTabs(str) {
  return str.replace(/\s/g, "").replace(/\t/g, "");
}





/**
 * Removes all space and tab characters from a given string using an iterative approach.
 *
 * This function iterates through each character of the input string and constructs
 * a new string by appending only the characters that are not spaces or tabs.
 *
 * @function removeSpaceAndTabsIterative
 * @param {string} str - The input string from which spaces and tabs will be removed.
 * @returns {string} - The resulting string with all spaces and tabs removed.
 *
 * @example
 * // Example usage:
 * const result = removeSpaceAndTabsIterative("Hello\t World\n");
 * console.log(result); // Output: "HelloWorld"
 */
function removeSpaceAndTabsIterative(str) {
  let ans = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " || str[i] === "\t") {
      continue;
    }
    ans += str[i];
  }
  return ans;
}







/**
 * Removes all space and tab characters from a given string using a recursive approach.
 *
 * This function recursively processes each character of the input string, constructing
 * a new string by concatenating only the characters that are not spaces or tabs.
 *
 * @function removeSpaceAndTabsRecursive
 * @param {string} str - The input string from which spaces and tabs will be removed.
 * @param {string} ans - The accumulator string where non-space and non-tab characters are collected.
 *                       This should be initialized as an empty string when the function is first called.
 * @param {number} idx - The current index being processed in the input string.
 *                       This should be initialized as 0 when the function is first called.
 * @returns {string} - The resulting string with all spaces and tabs removed.
 *
 * @example
 * // Example usage:
 * const result = removeSpaceAndTabsRecursive("Hello\t World\n", "", 0);
 * console.log(result); // Output: "HelloWorld"
 */
function removeSpaceAndTabsRecursive(str, ans, idx) {
  // Base Case: if we've reached the end of the string, return the accumulated result
  if (idx === str.length) {
    return ans;
  }

  // Get the current character at the specified index
  let currentChar = str[idx];

  // If the current character is a space or tab, skip it and move to the next character
  if (currentChar === " " || currentChar === "\t") {
    return removeSpaceAndTabsRecursive(str, ans, idx + 1);
  }

  // Otherwise, add the current character to the accumulator and move to the next character
  return removeSpaceAndTabsRecursive(str, ans + currentChar, idx + 1);
}




// ----------------------------------------------------Usage-------------------------------------------------- //

console.log(removeSpaceAndTabs(str));
console.log(removeSpaceAndTabsIterative(str));
console.log(removeSpaceAndTabsRecursive(str, "", 0));

// ----------------------------------------------------Usage-------------------------------------------------- //