/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    const obj = {};
    for(let item of arr) {
        if(obj[item]){
           obj[item] += 1;
        }else {
            obj[item] = 1;
        }
    }
    console.log(obj, ' obj')
    const distinctItems = Object.entries(obj).filter(([key,value]) => value == 1);
    console.log(distinctItems)
    return distinctItems[k - 1] ? distinctItems[k - 1][0]: "";
};