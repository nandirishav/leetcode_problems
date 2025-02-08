/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const res = [];
    function helper(start,curr) {
        //base case
        if(curr.length === k) {
            res.push(curr.slice());
            return;
        }
        //recursive case
        for(let j=start;j<=n;j++){
            curr.push(j);
            helper(j+1,curr);
            //backtrack
            curr.pop();
        }
    }
    helper(1,[]);
    return res;
};