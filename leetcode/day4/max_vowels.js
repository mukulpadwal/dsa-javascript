// https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      count++;
    }
  }

  let maxCount = count;

  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) {
      // we need to remove 1
      count = count - 1;
    }

    if (vowels.has(s[i])) {
      count = count + 1;
    }

    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};
