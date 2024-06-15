/**
 * Computes the nth Tribonacci number using memoization for optimization.
 *
 * The Tribonacci sequence is a generalization of the Fibonacci sequence where
 * each term is the sum of the three preceding terms. The sequence is defined as:
 * - trib(0) = 0
 * - trib(1) = 1
 * - trib(2) = 1
 * - trib(n) = trib(n - 1) + trib(n - 2) + trib(n - 3) for n > 2
 *
 * This function uses memoization to store the results of previously computed
 * Tribonacci numbers in a dictionary (object), which reduces the time complexity
 * from exponential O(3^n) to linear O(n) by avoiding redundant calculations.
 *
 * @param {number} n - The position in the Tribonacci sequence to compute.
 * @param {Object} [memo={}] - An object used to store the results of previously
 *                             computed Tribonacci numbers. This parameter is used
 *                             internally by the function during recursion and should
 *                             not be provided by the caller.
 * @returns {number} - The nth Tribonacci number.
 *
 * @example
 * // Basic usage
 * console.log(tribonacci(5)); // Output: 4
 *
 * @example
 * // Using memoization for large values
 * console.log(tribonacci(25)); // Output: 1389537
 */
function tribonacci(n, memo = {}) {
  // Base Case: Check if the result is already stored
  if (n in memo) {
    return memo[n];
  }

  // Base Cases: Define the first three Tribonacci numbers
  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  // Recursive Case: Compute the result and store it in the memo
  memo[n] =
    tribonacci(n - 1, memo) + tribonacci(n - 2, memo) + tribonacci(n - 3, memo);

  // Return the result
  return memo[n];
}

// Example usage
console.log(tribonacci(5)); // Output: 4
console.log(tribonacci(25)); // Output: 1389537
