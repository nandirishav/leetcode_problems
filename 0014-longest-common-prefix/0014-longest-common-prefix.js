/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = "";
    const first = strs[0];
    const last = strs[strs.length - 1];
    for(let i=0;i<first.length;i++){
        if(first[i] !== last[i])
            break;
        res += first[i];
    }
    return res;
};