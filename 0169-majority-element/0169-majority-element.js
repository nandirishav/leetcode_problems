/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const n = nums.length;
    let count = 0;
    let ele = -1;
    for(let i=0;i<n;i++) {
        if(count === 0) {
            ele = nums[i];
            count = 1;
        }else {
            const num = nums[i];
            if(num === ele) count++;
            else count--;        
        }
    }
    console.log(ele, 'ele', count, 'count');
    if (count > Math.floor(n / 2)) {
        return ele;
    }
    return ele;
};