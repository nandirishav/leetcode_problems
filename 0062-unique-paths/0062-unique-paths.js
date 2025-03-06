/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = Array(m).fill(0).map(() => Array(n).fill(-1));
    function helper(i,j,m,n,dp) {
        if(i === m - 1 && j === n - 1)
            return 1;
        else if(i >= m || j >= n)
            return 0;
        if(dp[i][j] !== -1) return dp[i][j];
        else {
            return dp[i][j] = helper(i+1,j,m,n,dp) + helper(i,j+1,m,n,dp);
        }
    }
    return helper(0,0,m,n,dp);
};