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
var inorderTraversal = function(root) {
    const res = [];
    const st = [];

    while(root || st.length) {
        while(root) {
            st.push(root);
            root = root.left;
        }
        root = st.pop();
        res.push(root.val);
        root = root.right;
    }
    return res;    
};