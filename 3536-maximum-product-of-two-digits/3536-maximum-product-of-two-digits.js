/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const str = String(n);
    const arr = str.split('');
    const sortedArr = arr.sort((a,b) => a - b);
    const len = sortedArr.length;
    const ans = sortedArr[len - 1] * sortedArr[len - 2];
    return ans;
};