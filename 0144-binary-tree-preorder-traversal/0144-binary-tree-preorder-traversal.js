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
    const res = [];
    const st = []; // use stack
    if(root == null){
        return st;
    }
    st.push(root);

    while(st.length) {
        const node = st.pop();
        res.push(node.val);
        if(node.right) st.push(node.right);
        if(node.left) st.push(node.left);
    }
    return res;
};