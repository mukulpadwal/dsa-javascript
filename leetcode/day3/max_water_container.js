// https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0;
    let j = height.length - 1;
    let maxi = -Infinity;


    while (i < j) {
        const currLevel = Math.min(height[i], height[j]) * (j - i);

        maxi = Math.max(currLevel, maxi);

        // move the pointers
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }

    }

    return maxi;
};