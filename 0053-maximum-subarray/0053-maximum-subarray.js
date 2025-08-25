/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const n = nums.length;
    let largestSum = nums[0];
    let curr_sum = 0;
    for(let i=0; i < n;i++) {
       curr_sum += nums[i];
       largestSum = Math.max(largestSum, curr_sum);
       if (curr_sum < 0) {
        curr_sum = 0;
       }
    }
    return largestSum;
};