/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let size = 0;
    let current = head;

    while(current) {
        current = current.next;
        size++;
    }
    current = head;
    let len = 0;
    const mid = Math.floor(size / 2);
    while(len !== mid) {
        current = current.next;
        len++;
    }
    return current;
};