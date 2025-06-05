/**
 * @param {string} s
 * @return {number}
 */

var lcs = function(text1, text2) {
    const m = text1.length;
    const n = text2.length;

    const t = Array.from({length: m + 1}, () => Array(n + 1).fill(0));

    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(text1[i-1] == text2[j-1]){
                t[i][j] = 1 + t[i-1][j-1];
            }else {
                t[i][j] = Math.max(t[i][j-1], t[i-1][j]);
            }
        }
    }
    return t[m][n];
};

var minInsertions = function(s) {
    return s.length - lcs(s, s.split("").reverse().join(""));
};