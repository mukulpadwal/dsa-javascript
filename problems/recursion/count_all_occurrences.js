/**
 * Counts the occurrences of a specified key in an array using an iterative approach.
 *
 * This function iterates through each element of the array, checking if it matches
 * the specified key, and increments a counter if it does.
 *
 * @function countOccurrencesIterative
 * @param {Array} arr - The array in which to count occurrences of the key.
 * @param {*} key - The value to count within the array.
 * @returns {number} - The number of times the key appears in the array.
 *
 * @example
 * // Example usage:
 * const result = countOccurrencesIterative([1, 2, 2, 3, 4, 1, 2, 2], 2);
 * console.log(result); // Output: 4
 */
function countOccurrencesIterative(arr, key) {
  let count = 0;

  // Iterate through each element in the array
  arr.forEach((element) => {
    // Increment count if the current element matches the key
    if (element === key) {
      count++;
    }
  });

  return count;
}







/**
 * Counts the occurrences of a specified key in an array using a recursive approach.
 *
 * This function checks each element of the array starting from a given index,
 * and recursively counts the occurrences of the specified key.
 *
 * @function countOccurrencesRecursive
 * @param {Array} arr - The array in which to count occurrences of the key.
 * @param {*} key - The value to count within the array.
 * @param {number} idx - The current index being checked in the array. Should be initialized to 0.
 * @returns {number} - The number of times the key appears in the array.
 *
 * @example
 * // Example usage:
 * const result = countOccurrencesRecursive([1, 2, 2, 3, 4, 1, 2, 2], 2, 0);
 * console.log(result); // Output: 4
 */
function countOccurrencesRecursive(arr, key, idx) {
  // Base Case: if the current index is equal to the length of the array, return 0
  if (idx === arr.length) {
    return 0;
  }

  // Check if the current element matches the key
  if (arr[idx] === key) {
    // If it does, add 1 and recursively call the function with the next index
    return 1 + countOccurrencesRecursive(arr, key, idx + 1);
  } else {
    // If it doesn't, recursively call the function with the next index without adding 1
    return countOccurrencesRecursive(arr, key, idx + 1);
  }
}



console.log(countOccurrencesIterative([1, 2, 2, 3, 4, 1, 2, 2], 2)); // Output: 4
console.log(countOccurrencesRecursive([1, 2, 2, 3, 4, 1, 2, 2], 2, 0)); // Output: 4

