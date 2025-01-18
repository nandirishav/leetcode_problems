/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const res = [];
    function helper(i,curr,currSum) {
        //base case
        if(currSum > target) {
            return;
        }
        if(currSum === target) {
            res.push([...curr]);
            return;
        }
        //rec case
        for(let j=i;j<candidates.length;j++){
            curr.push(candidates[j]);
            helper(j,curr,currSum + candidates[j]);
            //backtrack
            curr.pop();
        }
    }
    helper(0,[],0);
    return res;
};