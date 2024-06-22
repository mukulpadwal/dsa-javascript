// https://leetcode.com/problems/maximum-average-subarray-i/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  // Find the initial sum from the first k numbers in the nums array
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += nums[i];
  }

  // initialize the maxSum to the currSum
  let maxSum = sum;

  // Start another loop from k th element to the end of array and start moving the window
  // to modify the sum remove the first number add the current
  for (let i = k; i < nums.length; i++) {
    sum = sum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};
