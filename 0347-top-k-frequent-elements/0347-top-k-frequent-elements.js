/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const hashMap = new Map();
    for(let num of nums) {
        hashMap.set(num, (hashMap.get(num) || 0) + 1);
    }
    const sorted = Array.from(hashMap.entries()).sort((a,b) => b[1] - a[1]);
    console.log(sorted, 'sorted')
    return sorted.slice(0,k).map(entry => entry[0]);
};