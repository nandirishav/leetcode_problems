/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const res = [];
    const n = nums.length;
    nums.sort((a,b) => a - b);

    const helper = function (index,curr) {
        //base case
        if(index === n) {
            res.push(curr.slice());
            return;
        }
        // recursive case
        //include
        curr.push(nums[index]);
        helper(index + 1, curr);
        //backtrack
        curr.pop();
        //exclude - if we exclude an element we must exclude all occurences of that element
        while(index < n - 1 && nums[index] === nums[index + 1]){
            index++;
        }
        helper(index + 1, curr);
    }
    helper(0,[]);
    return res;
};