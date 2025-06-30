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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    let prev = null;
    let curr = root;
    while(curr) {
        if(curr.val < val) {
            prev = curr;
            curr = curr.right;
        }
        else if(curr.val > val) {
            prev = curr;
            curr = curr.left;
        }
    }
    const newNode = new TreeNode(val);
    if(!root) return root = newNode;
    if(val < prev.val) prev.left = newNode;
    if(val > prev.val) prev.right = newNode;
    return root;
};