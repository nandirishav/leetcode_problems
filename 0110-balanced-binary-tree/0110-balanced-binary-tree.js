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
 * @return {boolean}
 */

const dfsHeight = function(node) {
    if(node == null) return 0;

    const lh = dfsHeight(node.left);
    if(lh == -1) return -1;
    const rh = dfsHeight(node.right);
    if(rh == -1) return -1;

    if(Math.abs(lh - rh) > 1) return -1;
    return 1 + Math.max(lh, rh);
}

var isBalanced = function(root) {
    return dfsHeight(root) !== -1;
};