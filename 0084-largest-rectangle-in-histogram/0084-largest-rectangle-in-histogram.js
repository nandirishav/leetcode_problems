/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const st = [];
    let maxArea =  -1;

    for(let i=0;i<heights.length;i++) {
        while(st.length && heights[st[st.length - 1]] > heights[i]) {
            const element = st.pop();
            const nse = i;
            const pse = !st.length ? -1 : st[st.length - 1];
            const area = heights[element] * (nse - pse - 1);
            maxArea = Math.max(maxArea, area);
        }
        st.push(i); // we store the index of the element 
    }
    while(st.length) {
        const element = st.pop();
        const nse = heights.length; // because there is no nse element
        const pse = !st.length ? -1 : st[st.length - 1]; // -1 when no element left in stack
        const area = heights[element] * (nse - pse - 1);
        maxArea = Math.max(maxArea, area);
    }
    return maxArea;
};