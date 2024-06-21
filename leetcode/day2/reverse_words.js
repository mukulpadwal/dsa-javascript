// https://leetcode.com/problems/reverse-words-in-a-string/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  return s.trim().split(" ").reverse().join(" ").replace(/ +/g, " ");
};
