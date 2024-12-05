/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let res = nums[0];
    let min_diff = Math.abs(nums[0]);
    for(let i=1;i<nums.length;i++){
        const num = nums[i];
        const absDistanceFromZero = Math.abs(num - 0);
        if(absDistanceFromZero === min_diff) {
            res = Math.max(num, res);
        }else if(absDistanceFromZero < min_diff) {
            min_diff = absDistanceFromZero;
            res = num;
        }
    }
    return res;
};