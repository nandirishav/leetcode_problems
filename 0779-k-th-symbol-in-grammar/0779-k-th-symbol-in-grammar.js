/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

// observations - 
/* 
first half of nth row = n-1th row
second half = !(n-1)th row
*/
var kthGrammar = function(n, k) {
    //base case
    if(n === 1){
        return 0;
    }
    const len = Math.pow(2, n - 1);
    const mid = len/2;

    if(k <= mid){
        return kthGrammar(n-1,k);
    }else {
        return (1 - kthGrammar(n-1,k-mid)); // not of fn(n-1,k-mid)
    }
};