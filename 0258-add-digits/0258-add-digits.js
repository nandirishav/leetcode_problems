/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let str = String(num);
    while(str.split("").length > 1) {
        const arr = str.split("");
        let sum = 0;
        for(let ele of arr) {
            sum += Number(ele);
        }
        str = String(sum);
    }
    return Number(str);
};