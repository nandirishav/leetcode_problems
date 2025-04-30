/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const n1 = nums1.length;
    const n2 = nums2.length;
    const res = new Array(n1);
    const obj = {};
    const st = [];

    for(let i = n2 - 1; i>= 0; i--){
        if(st.length) {
            if (st[st.length - 1] > nums2[i]) {
                obj[nums2[i]] = st[st.length - 1];
            }else {
                while(st.length && st[st.length - 1] <= nums2[i]) {
                    st.pop();
                }
                obj[nums2[i]] = st.length ? st[st.length - 1] : -1;
            }
        }else {
            obj[nums2[i]] = -1;
        }
        st.push(nums2[i]);
    }
    for(let j=0;j<n1;j++){
        res[j] = obj[nums1[j]]
    }
    return res;
};