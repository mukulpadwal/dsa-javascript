// https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    let answer = Array(candies.length).fill(false);

    const max = findMaximum(candies);

    for (let i = 0; i < candies.length; i++) {
        // If at any given time the candy + extraCandie is greater than equal to the max we fill true
        if (candies[i] + extraCandies >= max) {
            answer[i] = true;
        }
    }

    return answer;
};

var findMaximum = function (candies) {
    let maxi = -Infinity;

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > maxi) {
            maxi = candies[i];
        }
    }

    return maxi;
}