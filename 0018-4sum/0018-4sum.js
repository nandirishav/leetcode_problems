/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    const n = nums.length;
    const ansSet = new Set();
    for(let i=0;i<n;i++){
        for(let j = i + 1;j < n; j++){
            const hashSet = new Set();
            for(let k=j+1;k<n;k++){
                const sum = nums[i] + nums[j] + nums[k];
                const fourth = target - sum;
                if(hashSet.has(fourth)){
                    const temp = [nums[i],nums[j],nums[k],fourth];
                    temp.sort((a,b) => a - b);
                    ansSet.add(temp.toString());
                }
                hashSet.add(nums[k]);
            }
        }
    }
    return Array.from(ansSet).map((str) => str.split(",").map(Number));
};