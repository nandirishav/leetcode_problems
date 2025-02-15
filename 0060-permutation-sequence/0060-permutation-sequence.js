/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
    let fact = 1;
    const numbers = Array.from({length:n},(_,i)=>i+1);
    for (let i = 1; i < n; i++) {
        fact = fact * i;
    }
    let ans = "";
    k = k - 1;
    while (numbers.length > 0) {
        let index = Math.floor(k / fact);
        ans = ans + numbers[index];
        numbers.splice(index, 1);
        if (numbers.length == 0) {
            break;
        }
        k = k % fact;
        fact = fact / numbers.length;
    }
    return ans;
};
