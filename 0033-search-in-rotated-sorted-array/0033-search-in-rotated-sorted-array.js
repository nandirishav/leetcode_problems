/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const n = nums.length;
    let left = 0, right = n - 1;

    while(left <= right) {
        let mid = (left + right) >> 1;
        if (nums[mid] === target) {
            return mid;
        }
        // if left side is sorted
        if(nums[left] <= nums[mid]){
            if(target >= nums[left] && target <= nums[mid]) {
                right = mid - 1;
            }else {
                left = mid + 1;
            }
        }else {
            if(target >= nums[mid] && target <= nums[right]) {
                left = mid + 1;
            }else {
                right = mid - 1;
            }
        }
    }
    return -1;
};