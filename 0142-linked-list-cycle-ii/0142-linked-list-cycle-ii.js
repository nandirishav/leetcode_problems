/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function findCycleStart(head,meetingPoint) {
    let slow = head;
    let fast = meetingPoint;

    while(slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
}

var detectCycle = function(head) {
    let slow = fast = head;
    while(fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if(slow === fast) {
            return findCycleStart(head, slow);
        }
    }
    return null;
};