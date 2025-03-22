/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charSet = new Set();
    let maxLength = 0, left = 0;

    for(let right=0;right < s.length; right++) {
        while(charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }
        //add current char
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }
    return maxLength;
};