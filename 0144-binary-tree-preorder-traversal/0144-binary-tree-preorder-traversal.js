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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    // root->left->right
    const res = []
    const helper = function(root) {
       if(root == null){
        return null;
       }
       res.push(root.val);
       helper(root.left);
       helper(root.right);
    }
    helper(root);
    return res;    
};