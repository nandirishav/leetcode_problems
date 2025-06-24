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



var diameterOfBinaryTree = function(root) {
    let maxi = 0;

    function findMaxHeight(node) {
        if(node === null) return 0;

        const lst = findMaxHeight(node.left);
        const rst = findMaxHeight(node.right);
        maxi = Math.max(lst + rst, maxi);
        return 1 + Math.max(lst,rst);
    }
    findMaxHeight(root);
    return maxi;
};