/**
 * Computes the nth Fibonacci number using tabulation (bottom-up dynamic programming).
 *
 * The Fibonacci sequence is defined as:
 * - fib(0) = 0
 * - fib(1) = 1
 * - fib(n) = fib(n - 1) + fib(n - 2) for n > 1
 *
 * This function uses a tabulation approach to build up the solution iteratively
 * and store intermediate results in an array (table), thus reducing the time
 * complexity to O(n) and the space complexity to O(n).
 *
 * @param {number} n - The position in the Fibonacci sequence to compute.
 * @returns {number} - The nth Fibonacci number.
 *
 * @example
 * // Basic usage
 * console.log(fibTabulation(5)); // Output: 5
 *
 * @example
 * // Computing larger Fibonacci numbers
 * console.log(fibTabulation(10)); // Output: 55
 */
function fibTabulation(n) {
  // Base Cases
  if (n <= 1) {
    return n;
  }

  // Initialize the table with base cases
  let table = Array(n + 1).fill(0);
  table[1] = 1;

  // Fill the table iteratively
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  // Return the nth Fibonacci number
  return table[n];
}

// Example usage
console.log(fibTabulation(5)); // Output: 5
console.log(fibTabulation(10)); // Output: 55
console.log(fibTabulation(25)); // Output: 75025
