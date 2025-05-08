/**
 * @param {string} s
 * @return {string}
 */

const expandAroundCenter = function(s,left,right) {
    while(left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left+1, right);
}

var longestPalindrome = function(s) {
    if (s.length < 2) return s;
    let longest = "";

    for(let i=0;i<s.length;i++) {
        //odd length
        const oddPal = expandAroundCenter(s,i,i);
        if(oddPal.length > longest.length) longest = oddPal;
        // even length
        const evenPal = expandAroundCenter(s, i, i + 1);
        if(evenPal.length > longest.length) longest = evenPal;
    }
    return longest;
};