/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let temp = dummy;
    let carry = 0;
    while((l1 !== null || l2 !== null) || carry) {
        let sum = 0;
        if (l1 !== null){
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null){
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        carry = Math.floor(sum / 10);
        const newNodeValue = sum % 10;
        const newNode = new ListNode(newNodeValue);
        temp.next = newNode;
        temp = temp.next;
    }
    return dummy.next;
};