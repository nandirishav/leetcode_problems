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
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const inorder = [];
    function getInOrder (root) {
        if(!root) return;
        getInOrder(root.left);
        inorder.push(root.val);
        getInOrder(root.right);
    }
    getInOrder(root);
    let left = 0, right = inorder.length - 1;
    while(left < right) {
        const sum = inorder[left] + inorder[right];
        if(sum == k) return true;
        else if(sum < k) left++;
        else right--;
    }
    return false;
};