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
    const set = new Set();
    if(headA === headB){
        return headA;
    }
    let temp1 = headA;
    set.add(temp1);
    while(temp1.next) {
        set.add(temp1.next);
        temp1 = temp1.next;
    }
    let temp2 = headB;
    if(set.has(temp2)){
        return temp2;
    }
    while(temp2) {
        if(set.has(temp2.next)){
            temp2 = temp2.next;
            return temp2;
        }
        temp2 = temp2.next;
    }
    return null;
};