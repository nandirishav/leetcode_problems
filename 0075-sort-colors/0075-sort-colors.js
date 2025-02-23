/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const n = nums.length;
    let low = 0, mid = 0, high = n - 1;
    while(mid <= high) {
        if(nums[mid] === 0) {
            [nums[mid], nums[low]] = [nums[low], nums[mid]];
            low++;
            mid++;
        }else if(nums[mid] === 1) {
            mid++;
        }else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;    
        }
    }
};