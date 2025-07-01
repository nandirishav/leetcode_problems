/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let count = 0;
    let result = -1;
    let curr = root;

    while(curr) {
        if(!curr.left) {
            count++;
            if(count == k){
                result = curr.val;
            }
            curr = curr.right;
        }else {
            let prev = curr.left;
            while(prev.right && prev.right !== curr) {
                prev = prev.right;
            }
            if(prev.right == null) {
                prev.right = curr;
                curr = curr.left;
            }else {
                prev.right = null;
                count++;
                if(count == k) {
                    result = curr.val;
                }
                curr = curr.right;
            }
        }
    }
    return result;
};