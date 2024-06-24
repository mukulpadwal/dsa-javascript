// https://leetcode.com/problems/max-number-of-k-sum-pairs/?envType=study-plan-v2&envId=leetcode-75

// Method 1

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations1 = function (nums, k) {
  nums = nums.sort((a, b) => a - b);

  let i = 0;
  let j = nums.length - 1;

  let count = 0;

  while (i < j) {
    const sum = nums[i] + nums[j];

    if (sum === k) {
      count++;
      i++;
      j--;
    } else if (sum < k) {
      i++;
    } else {
      j--;
    }
  }

  return count;
};

// Method 2

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let operations = 0;
    const map = new Map();

    for (const num of nums) {
        let compliment = k - num;

        if(map.get(compliment) > 0){
            operations++;
            map.set(compliment, map.get(compliment) - 1);
        } else {
            map.set(num, (map.get(compliment) || 0) + 1);
        }
    }

    return operations;
};
