/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let temp = head;
    const stack = [];

    while(temp) {
        stack.push(temp.val);
        temp = temp.next;
    }
    temp = head;
    while(temp) {
        if (temp.val !== stack.pop()){
            return false;
        }
        temp = temp.next;
    }
    return true;
};