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

// Function to reverse a linked list
// using the recursive approach
function reverseLinkedList(head) {
    
    // Initialize pointer 'temp' at
    // head of the linked list
    let temp = head;  
    
    // Initialize a pointer 'prev' to null
    // representing the previous node
    // (initially none)
    let prev = null;  

    // Traversing the list, continue until
    // 'temp' reaches the end (null)
    while (temp !== null) {  
        // Store the next node in
        // 'front' to preserve the reference
        let front = temp.next;  
        
        // Reverse direction of current node's
        // 'next' pointer to point to 'prev'
        temp.next = prev;  
        
        // Move 'prev' to the current node,
        // preparing it for the next iteration
        prev = temp;
        
        // Move 'temp' to the 'front' node
        // (the next node), advancing traversal
        temp = front;  
    }

    // Return the new head of
    // the reversed linked list
    return prev;  
}

var isPalindrome = function(head) {
    if (head === null || head.next === null) {
        // It's a palindrome by definition
        return true;
    }
    let slow = fast = head;
    // Traverse the linked list to find
    // the middle using slow and fast pointers
    while (fast.next !== null && fast.next.next !== null) {  
        // Move slow pointer one step at a time
        slow = slow.next;
        // Move fast pointer two steps at a time
        fast = fast.next.next;
    }
    // Reverse the second half of the
    // linked list starting from the middle
    const newHead = reverseLinkedList(slow.next);
     // Pointer to the first half
    let first = head;
    // Pointer to the reversed second half
    let second = newHead;
    while (second !== null) {
        // Compare data values of nodes from both halves
        if (first.val !== second.val) {
            // Not a palindrome
            return false;
        }
        // Move the first pointer
        first = first.next;
        // Move the second pointer
        second = second.next;
    }
    return true;
};