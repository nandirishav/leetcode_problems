/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    const n = intervals.length;
    // sort the given intervals
    intervals.sort((a, b) => a[0] - b[0]);
    const ans = [intervals[0]];
    
    for (let i = 1; i < n; i++) {
        const last = ans[ans.length - 1];
        const curr = intervals[i];        
        // if the current interval overlaps with the last interval
        if (curr[0] <= last[1]) {
            last[1] = Math.max(last[1], curr[1]);
        }
        // if the current interval does not overlap with the last interval
        else {
            ans.push(curr);
        }
    }
  
  return ans;
};