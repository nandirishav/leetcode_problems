/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let dummy1 = headA;
    let dummy2 = headB;
    let l1 = l2 = 0;

    while(dummy1 || dummy2) {
        if (dummy1){
            l1++;
            dummy1 = dummy1.next;
        } 
        if(dummy2){
            l2++;
            dummy2 = dummy2.next;
        }
    }
    let diff = Math.abs(l1 - l2);
    dummy1 = headA;
    dummy2 = headB;
    if(l1 > l2) {        
        while(diff) {
            dummy1 = dummy1.next;
            diff--;
        }
    }else {
        while(diff) {
            dummy2 = dummy2.next;
            diff--;
        }
    }
    while(dummy1 && dummy2) {
        if(dummy1 === dummy2) return dummy1;
        else{
            dummy1 = dummy1.next;
            dummy2 = dummy2.next;
        }
    }
    return null;
};