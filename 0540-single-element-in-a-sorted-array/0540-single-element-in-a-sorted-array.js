/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let low = 0, high = nums.length - 2;
    while(low <= high) {
        let mid = (low + high) >> 1;
        // check if mid is in left half
        if(nums[mid] === nums[mid ^ 1]){
            low = mid + 1;
        }else {
            high = mid - 1;
        }
    }
    return nums[low];
};