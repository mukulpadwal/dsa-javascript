/**
 * Calculates the Greatest Common Divisor (GCD) of two numbers using an iterative approach.
 *
 * This function iterates through all integers from 1 up to the larger of the two input numbers,
 * checking which ones divide both numbers without a remainder, and keeps track of the largest one.
 *
 * @function gcdIterative
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - The greatest common divisor of the two input numbers.
 *
 * @example
 * // Example usage:
 * const result = gcdIterative(42, 18);
 * console.log(result); // Output: 6
 */
function gcdIterative(num1, num2) {
  let answer = -1;

  for (let i = 1; i <= (num1 > num2 ? num1 : num2); i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      answer = i;
    }
  }

  return answer;
}

/**
 * Calculates the Greatest Common Divisor (GCD) of two numbers using the Euclidean algorithm recursively.
 *
 * This function uses the Euclidean algorithm, which is based on the principle that the GCD of two numbers
 * also divides their difference. It continues the process until one of the numbers becomes zero.
 *
 * @function gcdRecursive
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - The greatest common divisor of the two input numbers.
 *
 * @example
 * // Example usage:
 * const result = gcdRecursive(42, 18);
 * console.log(result); // Output: 6
 */
function gcdRecursive(num1, num2) {
  // Base Case: if num1 is 0, the GCD is num2
  if (num1 === 0) {
    return num2;
  }

  // Recursive Case: apply the Euclidean algorithm
  return gcdRecursive(num2 % num1, num1);
}

/**
 * Calculates the Greatest Common Divisor (GCD) of two numbers using the subtraction method recursively.
 *
 * This function uses a recursive approach where the larger number is replaced by the difference of the two numbers
 * until one of the numbers becomes zero.
 *
 * @function gcdRecursive1
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 * @returns {number} - The greatest common divisor of the two input numbers.
 *
 * @example
 * // Example usage:
 * const result = gcdRecursive1(42, 8);
 * console.log(result); // Output: 2
 */
function gcdRecursive1(num1, num2) {
  // Base Case: if num1 is 0, the GCD is num2
  if (num1 === 0) {
    return num2;
  }

  // Recursive Case: use subtraction method
  if (num1 > num2) {
    return gcdRecursive1(num1 - num2, num2);
  }

  return gcdRecursive1(num1, num2 - num1);
}

// ----------------------------------------------------Usage-------------------------------------------------- //

console.log(gcdIterative(42, 18));
console.log(gcdRecursive(42, 18));
console.log(gcdRecursive1(42, 8));

// ----------------------------------------------------Usage-------------------------------------------------- //
