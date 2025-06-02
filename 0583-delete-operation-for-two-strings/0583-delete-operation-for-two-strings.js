/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

const lcs = function(a,b) {
    const m = a.length;
    const n = b.length;

    const t = Array.from({length: m + 1}, () => Array(n + 1).fill(0));
    for(let i=1;i<=m;i++){
        for(let j=1;j<=n;j++){
            if(a[i-1] == b[j-1]){
                t[i][j] = 1 + t[i-1][j-1];
            }else {
                t[i][j] = Math.max(t[i][j-1], t[i-1][j]);
            }
        }
    }

    return t[m][n];
}

var minDistance = function(word1, word2) {
    const lcsVal = lcs(word1,word2);
    return word1.length - lcsVal + word2.length - lcsVal;
};