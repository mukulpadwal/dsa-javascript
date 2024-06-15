/**
 * Computes the nth Fibonacci number using memoization for optimization.
 *
 * The Fibonacci sequence is defined as:
 * - fib(0) = 0
 * - fib(1) = 1
 * - fib(n) = fib(n - 1) + fib(n - 2) for n > 1
 *
 * This function uses memoization to store the results of previously computed
 * Fibonacci numbers in a dictionary (object), which reduces the time complexity
 * from exponential O(2^n) to linear O(n) by avoiding redundant calculations.
 *
 * @param {number} n - The position in the Fibonacci sequence to compute.
 * @param {Object} [memo={}] - An object used to store the results of previously
 *                             computed Fibonacci numbers. This parameter is used
 *                             internally by the function during recursion and should
 *                             not be provided by the caller.
 * @returns {number} - The nth Fibonacci number.
 *
 * @example
 * // Basic usage
 * console.log(fibMemo(5)); // Output: 5
 *
 * @example
 * // Using memoization for large values
 * console.log(fibMemo(50)); // Output: 12586269025
 */
function fibMemo(n, memo = {}) {
  // Base Case 1: Check if the result is already stored
  if (n in memo) {
    return memo[n];
  }

  // Base Case 2: If n is 0 or 1
  if (n <= 1) {
    return n;
  }

  // Recursive Case: Compute the result and store it in the memo
  memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);

  // Return the result
  return memo[n];
}

// Example usage
console.log(fibMemo(5)); // Output: 5

console.log(fibMemo(50)); // Output: 12586269025
