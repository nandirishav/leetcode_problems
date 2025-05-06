/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    const digits = String(n).split('').map(Number);
    let max1 = 0, max2 = 0;

    for (let digit of digits) {
        if (digit > max1) {
        max2 = max1;
        max1 = digit;
        } else if (digit > max2) {
        max2 = digit;
        }
    }

    return max1 * max2;
};