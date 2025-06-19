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
 * @return {number[][]}
 */
var levelOrder = function(root) {
     const result = [];

    function traverse(node, level) {
        if (!node) return;

        // If visiting this level for the first time, add a new array
        if (result.length === level) {
            result.push([]);
        }

        // Add the current node's value to its level
        result[level].push(node.val);

        // Recurse to left and right child, increasing level
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }

    traverse(root, 0);
    return result;
};