/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const n1 = nums1.length;
    const n2 = nums2.length;
    const n = n1 + n2;
    let ele1 = -1, ele2 = -1;
    let idx2 = Math.ceil(n/2);
    let idx1 = idx2 - 1;

    let i=0,j = 0, cnt = 0;
    while(i < n1 && j < n2) {
        if(nums1[i] < nums2[j]) {
            if(cnt === idx1) ele1 = nums1[i];
            if(cnt === idx2) ele2 = nums2[i];
            i++; cnt++;
        } else {
            if(cnt === idx1) ele1 = nums1[j];
            if(cnt === idx2) ele2 = nums2[j];
            j++; cnt++;
        }
        if(ele1 && ele2) {
            break;
        }
    }
    while(i < n1) {
        if(cnt === idx1) ele1 = nums1[i];
        if(cnt === idx2) ele2 = nums2[i];
        i++; cnt++;
        if(ele1 && ele2) {
            break;
        }
    }
    while(j < n2) {
        if(cnt === idx1) ele1 = nums1[j];
        if(cnt === idx2) ele2 = nums2[j];
        j++; cnt++;
        if(ele1 && ele2) {
            break;
        }
    }
    if(n % 2 === 1) {
        return ele2;
    }else {
        return (ele1 + ele2)/2;
    }
};