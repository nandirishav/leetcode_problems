/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
   const res = [];
   let positive = 0, negative = 1;
   let i=0;
   const n = nums.length;
   while(i < n && positive < n && negative < n) {
    const num = nums[i];
    if(num > 0) {
        res[positive] = num;
        positive += 2;
    }else {
        res[negative] = num;
        negative += 2;
    }
    i++;
   }
   while(i < n && positive < n) {
    const num = nums[i];
    res[positive] = num;
    positive += 2;
    i++;
   }
   while(i < n && negative < n) {
    const num = nums[i];
    res[negative] = num;
    negative += 2;
    i++;
   }
   return res;
};