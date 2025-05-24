/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var countOfSubsetWithGivenDiff = function(nums,sum) {
    const n = nums.length;
    const t = Array.from({length: n + 1}, () => Array(sum + 1).fill(0));

    for(let i=0;i<=n;i++){
        t[i][0] = 1;
    }
    for(let i=1;i<=n;i++){
        for(let j=0;j<=sum;j++){
            if(nums[i-1] <= j) {
                t[i][j] = t[i-1][j-nums[i-1]] + t[i-1][j];
            }else{
                t[i][j] = t[i-1][j];
            }
        }
    }
    return t[n][sum];
}

var findTargetSumWays = function(nums, target) {
    const total = nums.reduce((acc,curr) => acc + curr,0);
    if((total + target)<0 || (total + target) % 2 !== 0 || target > total) {
        return 0;
    }
    return countOfSubsetWithGivenDiff(nums, (total + target)/2);
};