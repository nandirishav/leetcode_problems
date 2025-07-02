/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

function insertIntoBST(root, val) {
    if (val < root.val) {
        if (root.left === null) {
            root.left = new TreeNode(val);
        } else {
            insertIntoBST(root.left, val);
        }
    } else {
        if (root.right === null) {
            root.right = new TreeNode(val);
        } else {
            insertIntoBST(root.right, val);
        }
    }
}

var bstFromPreorder = function(preorder) {
    if (preorder.length === 0) return null;

    const root = new TreeNode(preorder[0]);
    for (let i = 1; i < preorder.length; i++) {
        insertIntoBST(root, preorder[i]);
    }
    return root;
};