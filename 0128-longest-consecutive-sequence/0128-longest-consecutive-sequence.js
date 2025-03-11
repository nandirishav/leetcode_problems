/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return nums.length;
    }
    nums.sort((a,b) => a - b);
    let lastSmaller = -Infinity;
    let cnt = 0, longest = 1;
    for(let i=0;i<nums.length;i++){
        if(nums[i] - 1 === lastSmaller){
            cnt += 1;
            lastSmaller = nums[i];
        }else if(nums[i] !== lastSmaller){
            cnt = 1;
            lastSmaller = nums[i];
        }
        longest = Math.max(longest, cnt);
    }
    return longest;
};