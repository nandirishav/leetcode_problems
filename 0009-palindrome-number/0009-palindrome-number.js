/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    let xStr = x.toString()
    let i=0, j = xStr.length - 1;
    while(i < j) {
        if (xStr[i] !== xStr[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
};