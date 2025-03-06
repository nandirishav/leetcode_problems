/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    let ele1, cnt1 = 0, ele2, cnt2 = 0;
    for(let i=0;i<nums.length;i++){
        if(cnt1 === 0 && nums[i] !== ele2) {
            ele1 = nums[i];
            cnt1 = 1; 
        }else if(cnt2 === 0 && nums[i] !== ele1) {
            ele2 = nums[i];
            cnt2 = 1; 
        }else if(ele1 === nums[i]){
            cnt1++;
        }else if(ele2 === nums[i]){
            cnt2++;
        }else{
            cnt1--;
            cnt2--;
        }
    }
    let finalCnt1 = 0,finalCnt2 = 0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === ele1){
            finalCnt1++;
        }else if(nums[i] === ele2){
            finalCnt2++;
        }
    }
    const res = [];
    if(finalCnt1 > Math.floor(nums.length/3)){
        res.push(ele1);
    }
    if(finalCnt2 > Math.floor(nums.length/3)){
        res.push(ele2);
    }
    return res;
};