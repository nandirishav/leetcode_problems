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
var bstFromPreorder = function(preorder) {
    const inorder = [...preorder].sort((a,b) => a - b);
    // create the hashmap for inorder
    const inorderMap = new Map();
    for(let i=0;i<inorder.length;i++){
        inorderMap.set(inorder[i], i);
    }
    let preorderRootIndex = 0;
    const buildBst = function (left,right) {
        if(left > right) return null;
        const rootVal = preorder[preorderRootIndex++];
        const root = new TreeNode(rootVal);
        const index = inorderMap.get(rootVal);

        root.left = buildBst(left, index - 1);
        root.right = buildBst(index + 1, right);

        return root;
    }
    return buildBst(0, inorder.length - 1);
};