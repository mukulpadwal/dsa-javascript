// https://leetcode.com/problems/find-the-difference-of-two-arrays/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
    // Let us create two sets from the given arrays so that we are left with only unique values
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const unique1 = [...set1].filter((num) => !set2.has(num));
    const unique2 = [...set2].filter((num) => !set1.has(num));

    return [unique1, unique2]
};