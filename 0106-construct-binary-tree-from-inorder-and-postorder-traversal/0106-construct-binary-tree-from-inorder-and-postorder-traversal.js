/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    const inorderMap = new Map();
    for(let i=0;i<inorder.length;i++){
        inorderMap.set(inorder[i], i);
    }
    let postorderIdx = postorder.length - 1;
    const buildArrayToTree = function (left, right) {
        if(left > right) return null;

        const rootVal = postorder[postorderIdx--];
        const root = new TreeNode(rootVal);

        const idx = inorderMap.get(rootVal);
        root.right = buildArrayToTree(idx + 1, right);
        root.left = buildArrayToTree(left, idx - 1);

        return root;
    }
    return buildArrayToTree(0, inorder.length - 1);
};