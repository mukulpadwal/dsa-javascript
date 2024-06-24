// https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    // Lets find the sum of this entire array
    const totalSum = nums.reduce((acc, num) => acc + num, 0);

    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        let rightSum = totalSum - leftSum - nums[i];
        if (rightSum === leftSum) {
            return i;
        }

        leftSum = leftSum + nums[i];
    }

    return -1;
};