/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    function helper(n){
        if(n === 1){
            return 0;
        }else {
            return (helper(n-1) + k) % n;
        }
    }
    return helper(n) + 1;
};