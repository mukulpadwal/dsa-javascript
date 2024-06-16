/**
 * Determines if it is possible to form the target sum using any combination of the given coins.
 *
 * This function uses recursion with memoization to efficiently compute whether a target sum
 * can be achieved by using the elements in the coins array any number of times.
 *
 * @param {number} target - The target sum to be achieved.
 * @param {number[]} coins - The array of coin denominations available.
 * @param {number} idx - The current index in the coins array.
 * @param {object} memo - The memoization object to store previously computed results.
 * @returns {boolean} - Returns true if the target sum is achievable, otherwise false.
 *
 * @example
 * // Basic usage
 * console.log(sumPossible(11, [5, 12, 4], 0)); // Output: true
 *
 * @example
 * // Different coin combinations
 * console.log(sumPossible(9, [2, 3], 0)); // Output: true
 *
 * @example
 * // When target is not achievable
 * console.log(sumPossible(7, [2, 4], 0)); // Output: false
 */
function sumPossible(target, coins, idx, memo = {}) {
  // Base Case 1 : if we have already calculated the sum for a particular target
  if (target in memo) {
    return memo[target];
  }

  // Base Case 2 : if we have found the target
  if (target === 0) {
    return true;
  }

  // Base Case 3 : if target is not possible
  if (target < 0 || idx === coins.length) {
    return false;
  }

  // Recursive cases: choose the current coin or move to the next coin
  const includeCoin = sumPossible(target - coins[idx], coins, idx, memo);
  const excludeCoin = sumPossible(target, coins, idx + 1, memo);

  // Memoize and return the result
  memo[target] = includeCoin || excludeCoin;
  return memo[target];
}

// Example usage
console.log(sumPossible(11, [5, 12, 4], 0)); // Output: false
console.log(sumPossible(9, [2, 3], 0)); // Output: true
console.log(sumPossible(7, [2, 4], 0)); // Output: false
