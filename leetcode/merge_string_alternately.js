// https://leetcode.com/problems/merge-strings-alternately/submissions/1293135353/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
  let i = 0; // Index to traverse word1
  let j = 0; // Index to traverse word2
  let ans = ""; // Final answer

  // Loop 1 : traversing both words together
  while (i < word1.length && j < word2.length) {
    ans += word1[i++] + word2[j++];
  }

  // Loop 2 : if word1 still has characters left
  while (i < word1.length) {
    ans += word1[i++];
  }

  // Loop 3 : if word2 still has chracters left
  while (j < word2.length) {
    ans += word2[j++];
  }

  return ans;
};
