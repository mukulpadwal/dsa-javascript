// https://leetcode.com/problems/is-subsequence/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0; // index to keep track of s string

  // loop to traverse through j
  for (let j = 0; j < t.length; j++) {
    if (i < s.length && s[i] === t[j]) {
      i++;
    }
  }

  return i === s.length;
};
