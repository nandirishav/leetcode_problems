/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const res = [];
    candidates.sort((a,b) => a - b);

    function helper(index , currSum, curr) {
        // base case
        if (currSum === target) {
            res.push([...curr]);
            return;
        }
        if (currSum > target || index > candidates.length - 1) {
            return;
        }
        let hash = {};
        for (let j = index; j < candidates.length; j++) {
            if (!hash[candidates[j]]) {
              hash[candidates[j]] = true;
              curr.push(candidates[j]);
              helper(j + 1, currSum + candidates[j],curr); // j + 1 since we cannot use one element more than once
              //backtrack
              curr.pop();  
            }
        }
    }
    helper(0,0,[]);
    return res;
};