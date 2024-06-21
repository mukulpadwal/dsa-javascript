// https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=leetcode-75


// METHOD 1 : nested loops
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf1 = function (nums) {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        prod *= nums[j];
      }
    }
    answer.push(prod);
  }

  return answer;
};



// METHOD 2 : left and right array method
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const left = new Array(nums.length).fill(1);
  const right = new Array(nums.length).fill(1);

  // Let us store the left side products
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  // Let us store the right side products
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  // Let us store answer
  for (let i = 0; i < nums.length; i++) {
    nums[i] = left[i] * right[i];
  }

  return nums;
};
