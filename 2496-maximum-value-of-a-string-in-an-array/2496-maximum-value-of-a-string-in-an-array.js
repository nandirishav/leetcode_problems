/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let maxValue = 0;
    for(const str of strs) {
        let currValue = 0;
        // check if it consists of only digits
        if(!isNaN(str)) {
            currValue += Number(str);
        }
        else {
            currValue += str.length;
        }
        maxValue = Math.max(currValue, maxValue);
    }
    return maxValue;
};