/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    const arr = Array.from({length: n}, (_,i) => i + 1);
    
    function helper(arr,startIdx) {
        // base case
        if(arr.length === 1) return arr[0];
        // rec case
        let indexToDelete = (startIdx + k - 1) % arr.length;
        arr.splice(indexToDelete,1);
        return helper(arr,indexToDelete);
    }
    return helper(arr,0);
};