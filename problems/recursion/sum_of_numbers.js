// sum of numbers till n

/**
 * Calculates the sum of all integers from 1 to a given number using an iterative approach.
 *
 * This function uses a loop to iterate through all integers from 1 to the specified number,
 * accumulating the sum of these integers.
 *
 * @function sumTillNIterative
 * @param {number} num - The number up to which the sum is calculated. It should be a positive integer.
 * @returns {number} - The sum of all integers from 1 to the specified number.
 *
 * @example
 * // Example usage:
 * const result = sumTillNIterative(5);
 * console.log(result); // Output: 15
 */
function sumTillNIterative(num) {
  let sum = 0;

  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  return sum;
}

/**
 * Calculates the sum of all integers from 1 to a given number using a recursive approach.
 *
 * This function recursively adds the current number to the sum of all numbers before it,
 * until it reaches the base case of 1.
 *
 * @function sumTillNRecursive
 * @param {number} num - The number up to which the sum is calculated. It should be a positive integer.
 * @returns {number} - The sum of all integers from 1 to the specified number.
 *
 * @example
 * // Example usage:
 * const result = sumTillNRecursive(5);
 * console.log(result); // Output: 15
 */
function sumTillNRecursive(num) {
  // Base case: if num is 1, return 1
  if (num === 1) {
    return 1;
  }

  // Recursive case: return the current number plus the sum of all previous numbers
  return num + sumTillNRecursive(num - 1);
}

// ----------------------------------------------------Usage-------------------------------------------------- //

console.log(sumTillNRecursive(5));
console.log(sumTillNIterative(5));

// ----------------------------------------------------Usage-------------------------------------------------- //

