/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

const lcsTable = function(a,b) {
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

    return t;
}

const shortestCommonSupersequence = function(str1, str2) {
    const m = str1.length;
    const n = str2.length;
    const dp = lcsTable(str1, str2);

    let i = m, j = n;
    let scs = [];

    while (i > 0 && j > 0) {
        if (str1[i - 1] === str2[j - 1]) {
            scs.push(str1[i - 1]);
            i--;
            j--;
        } else if (dp[i - 1][j] > dp[i][j - 1]) {
            scs.push(str1[i - 1]);
            i--;
        } else {
            scs.push(str2[j - 1]);
            j--;
        }
    }

    while (i > 0) {
        scs.push(str1[i - 1]);
        i--;
    }

    while (j > 0) {
        scs.push(str2[j - 1]);
        j--;
    }

    return scs.reverse().join('');
};
