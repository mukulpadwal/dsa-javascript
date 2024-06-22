// https://leetcode.com/problems/move-zeroes/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let i = 0;
  let j = 0;

  while (i < nums.length && j < nums.length) {
    while (i < nums.length && nums[i] !== 0) {
      i++;
    }

    while (j < nums.length && nums[j] === 0) {
      j++;
    }

    if (i < j && j < nums.length) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
    } else {
      j++;
    }
  }
};
