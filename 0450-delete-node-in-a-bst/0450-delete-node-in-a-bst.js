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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if(!root) return null;
    if(root.val == key) {
        return helper(root);
    }
    const curr = root;
    while(root) {
        // search for key
        if(root.val > key){
            // before moving left check if left is not null
            if(root.left !== null && root.left.val == key) {
                root.left = helper(root.left); // breaking and attaching
                break; // work done so break
            }else {
                root = root.left;
            }
        }else {
            // similar checks
            if(root.right !== null && root.right.val == key) {
                root.right = helper(root.right);
                break;
            }else {
                root = root.right;
            }
        }
    }
    return curr;
};

const helper = function (root) {
    // if no left subtree, just return right subtree
    if(root.left == null) {
        return root.right; 
    }
    // if no right subtree, return left
    if(root.right == null) {
        return root.left;
    }
    // removing and attaching process
    const rightChild = root.right;
    // find largest node in left subtree which is last right
    const lastRight = findLastRight(root.left);
    lastRight.right = rightChild;
    return root.left; // we are removing right subtree connection so returning left
}

const findLastRight = function (root) {
    if(root.right == null) 
        return root;
    return findLastRight(root.right);
}