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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;
    //prepare hashmap for inorderTraversal
    const hashMap = new Map();
    for(let i=0;i<inorder.length; i++){
        hashMap.set(inorder[i],i);
    }
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    // find root in inorder
    const midIndex = hashMap.get(rootVal);
    // Left and right subtrees in inorder
    const leftInOrder = inorder.slice(0,midIndex);
    const rightInOrder = inorder.slice(midIndex + 1);

    // Left and right subtrees in preOrder
    const leftPreOrder = preorder.slice(1, 1 + leftInOrder.length);
    const rightPreOrder = preorder.slice(1 + leftInOrder.length);

    // Recursively build left and right subtrees
    root.left = buildTree(leftPreOrder, leftInOrder);
    root.right = buildTree(rightPreOrder, rightInOrder);

    return root;    
};