/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let count = 0;
    for(let num of nums) {
        if (num == 0) count = 0;
        else count++;
        maxCount = Math.max(count, maxCount);
    }
    return maxCount;
};