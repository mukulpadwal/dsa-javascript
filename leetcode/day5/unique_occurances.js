// https://leetcode.com/problems/unique-number-of-occurrences/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
  const map = new Map();

  for (num of arr) {
    if (map.get(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, (map.get(num) || 0) + 1);
    }
  }

  const set = new Set(map.values());

  return map.size === set.size;
};
