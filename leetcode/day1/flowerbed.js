// https://leetcode.com/problems/can-place-flowers/submissions/1293471064/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      let isLeftValid = i === 0 || flowerbed[i - 1] === 0;

      let isRightValid = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (isLeftValid && isRightValid) {
        flowerbed[i] = 1;
        count++;
      }
    }
  }
  return count >= n;
};
