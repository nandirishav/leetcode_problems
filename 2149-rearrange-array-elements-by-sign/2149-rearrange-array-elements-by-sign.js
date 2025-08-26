/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    const positives = [];
    const negatives = [];
    for(const num of nums) {
        if(num < 0) {
            negatives.push(num);
        }else {
            positives.push(num);
        }
    }
    const res = [];
    let i=0;
    while(i < positives.length && i < negatives.length) {
        res.push(positives[i]);
        res.push(negatives[i]);
        i++;
    }
    return res;
};