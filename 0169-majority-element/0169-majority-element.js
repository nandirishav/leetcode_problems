/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const mp = new Map();
    const target = nums.length / 2;
    for(const num of nums) {
        if(!mp.has(num)){
            mp.set(num, 1);
        }
        else{
            mp.set(num, mp.get(num) + 1);
        }
    }
    for(const [key,value] of mp) {
        if(value > target){
            return key;
        }
    }
};