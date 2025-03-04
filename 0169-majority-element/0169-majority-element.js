/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let ele;
    let count = 0;
    for(let i=0;i<nums.length;i++){
        if(count === 0) {
            count = 1;
            ele = nums[i];
        }else if(nums[i] === ele){
            count++;
        }else {
            count--;
        }
    }
    return ele;
};