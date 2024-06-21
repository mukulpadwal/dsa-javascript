// https://leetcode.com/problems/reverse-vowels-of-a-string/description/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  let start = 0;
  let end = s.length - 1;
  const vowels = "aeiouAEIOU";
  const ans = s.split("");

  while (start < end) {
    while (start < end && vowels.indexOf(ans[start]) === -1) {
      start++;
    }

    while (start < end && vowels.indexOf(ans[end]) === -1) {
      end--;
    }

    if (start < end) {
      const temp = ans[start];
      ans[start] = ans[end];
      ans[end] = temp;

      start++;
      end--;
    }
  }

  return ans.join("");
};
