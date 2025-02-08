/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    const n = nums.length;

    const helper = function(nums,i,subset) {
        //base case
        if(i === n) {
            res.push(subset.slice());
            return;
        }
        // recursive case
        // two choices - exclude or include 

        // exclude
        helper(nums,i+1,subset);
        //include
        subset.push(nums[i]);
        helper(nums,i+1,subset);
        //backtrack
        subset.pop();
    }
    helper(nums,0,[]);
    return res;
};