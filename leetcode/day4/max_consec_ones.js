// https://leetcode.com/problems/max-consecutive-ones-iii/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let leftPointer = 0;
    let rightPointer = 0;
    let zeroUsedCount = 0;
    let maxCount = 0;

    while(rightPointer < nums.length){
        // Check if the current position element while moving right is zero
        if(nums[rightPointer] === 0){
            // Let's include this zero in out length
            zeroUsedCount++;
        }

        // Check if we have exceeded the limit of the number of zeros allocated
        if(zeroUsedCount > k){
            // We need to shrink our window
            if(nums[leftPointer] === 0){
                zeroUsedCount--;
            }

            leftPointer++;
        }

        maxCount = Math.max(maxCount, rightPointer - leftPointer + 1);

        rightPointer++;
    }

    return maxCount;
};