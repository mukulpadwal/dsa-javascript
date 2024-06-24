// https://leetcode.com/problems/find-the-highest-altitude/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function (gain) {
  let maxAlt = 0;
  let currSum = 0;

  for (let i = 0; i < gain.length; i++) {
    currSum += gain[i];

    maxAlt = Math.max(maxAlt, currSum);
  }

  return maxAlt;
};
