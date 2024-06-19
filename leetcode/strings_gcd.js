// https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  // Base Case
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  return gcd(str1, str2);
};

var gcd = function (str1, str2) {
  if (str1.length === 0) {
    return str2;
  }

  return gcd(str2.slice(0, str2.length % str1.length), str1);
};
