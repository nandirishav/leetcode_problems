/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    // Total 3 reversals
    // Step 1: reverse entire input arr
    // Step 2: Create two groups before k and after k
    // step 3: Reverse both groups (ans)

    const n = nums.length;
    k = k % n;
    const reverse = (left, right) => {
        while(left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    reverse(0, n - 1); // step 1
    reverse(0, k - 1); // step 2
    reverse(k, n - 1); // step 3
};