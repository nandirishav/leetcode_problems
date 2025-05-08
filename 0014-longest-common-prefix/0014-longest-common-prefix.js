/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = "";
    const first = strs[0];
    for(let i=0;i<first.length;i++){
        // check if ith character of first word is present in the other strings
        for(let j=1;j<strs.length;j++){
            if(strs[j][i] !== first[i]){
                return res;
            }
        }
        res += first[i];
    }
    return res;
};