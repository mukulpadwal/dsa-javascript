// https://leetcode.com/problems/string-compression/submissions/1295306374/?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let index = 0;
    let itr = 0;

    while (index < chars.length) {
        // find the current char
        let i = itr;
        let currChar = chars[i];

        while (i < chars.length && chars[i] === currChar) {
            i++;
        }

        let count = i - itr;

        chars[index++] = currChar;

        if (count > 1) {

            [...count.toString()].forEach((c) => {
                chars[index++] = c;
            })
        }

        // Break condition
        if (i === chars.length) {
            return index;
        }

        itr = i;

    }



};