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
var rightSideView = function(root) {
    const res = [];
    const getRightSideView = function(root, level) {
        if(root == null) return
        if(res.length == level){
            res.push(root.val);
        }
        getRightSideView(root.right, level + 1);
        getRightSideView(root.left, level + 1);
    }
    getRightSideView(root, 0);
    return res;
};