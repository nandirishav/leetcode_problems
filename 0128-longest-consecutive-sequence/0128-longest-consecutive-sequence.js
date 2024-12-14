/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0){
        return nums.length;
    }
    const set = new Set(nums);
    let maxSeq = 0;
    for(const num of set){
        if(!set.has(num - 1)){
            let currNum = num;
            let currSeq = 1;

            while(set.has(currNum + 1)){
                currNum += 1;
                currSeq++;
            }
            maxSeq = Math.max(maxSeq,currSeq);
        }
    }
    return maxSeq;
};