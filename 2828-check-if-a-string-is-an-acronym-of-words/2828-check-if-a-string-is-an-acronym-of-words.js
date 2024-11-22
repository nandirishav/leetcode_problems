/**
 * @param {string[]} words
 * @param {string} s
 * @return {boolean}
 */
var isAcronym = function(words, s) {
    let res = "";
    for(let word of words) {
        res += word[0];
    }
    return res === s;
};