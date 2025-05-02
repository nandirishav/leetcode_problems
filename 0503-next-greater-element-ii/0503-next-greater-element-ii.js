/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const nge = new Array(n).fill(-1);

    for(let i=0;i<n;i++) {
        for(let j = i + 1; j<= (i + n - 1); j++) {
            const idx = j % n;
            if(nums[idx] > nums[i]) {
                nge[i] = nums[idx];
                break;
            }
        }
    }
    return nge;
};