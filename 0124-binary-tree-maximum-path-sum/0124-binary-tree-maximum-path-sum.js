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
 * @return {number}
 */
var maxPathSum = function(root) {
    let maxi = Number.MIN_SAFE_INTEGER;
    const maxPathDown = function(node) {
        if(node == null) return 0;
        const leftSum = Math.max(0, maxPathDown(node.left));
        const rightSum = Math.max(0, maxPathDown(node.right));
        maxi = Math.max(maxi, node.val + leftSum + rightSum);
        return node.val + Math.max(leftSum, rightSum);
    }
    maxPathDown(root);
    return maxi;
};