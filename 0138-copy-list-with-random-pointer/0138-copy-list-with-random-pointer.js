/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
    let temp = head;
    const hashMap = new Map();
    //creating dummy nodes and storing in hashmap
    while(temp) {
        const newNode = new _Node(temp.val);
        hashMap.set(temp, newNode);
        temp = temp.next;
    }
    // connect next and random pointers
    temp = head;
    while(temp) {
        const copiedNode = hashMap.get(temp);
        copiedNode.next = temp.next ? hashMap.get(temp.next) : null;
        copiedNode.random = temp.random ? hashMap.get(temp.random) : null
        temp = temp.next; 
    }
    return hashMap.get(head);
};