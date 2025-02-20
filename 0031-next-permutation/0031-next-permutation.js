/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    const n = nums.length;
    let idx = -1;
    //find breakpoint
    for(let i=n-2;i>=0;i--){
        if(nums[i] < nums[i+1]){
            idx = i;
            break;
        }
    }
    console.log(idx, 'idx')
    if(idx === -1){
        nums.reverse();
        return;
    }
    // find someone just greater than nums[idx] from the back and swap
    for(let i=n-1;i>=idx;i--){
        if(nums[i] > nums[idx]){
            [nums[i],nums[idx]] = [nums[idx],nums[i]];
            break;
        }
    }
    // reverse from idx + 1 to n - 1
    let start = idx + 1, end = n - 1;
    while(start < end) {
        [nums[start],nums[end]] = [nums[end],nums[start]];
        start++;
        end--;
    }
    console.log(nums, 'nums');
};