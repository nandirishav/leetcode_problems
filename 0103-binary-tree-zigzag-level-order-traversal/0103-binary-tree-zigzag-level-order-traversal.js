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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const ans = [];
    if(root == null) return ans;

    const queue = [root];
    let flag = 0;
    while(queue.length) {
        const n = queue.length;

        const level = [];
        for(let i=0;i<n;i++){
            const node = queue.shift();
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
            level.push(node.val);
        }
        flag == 0 ? ans.push(level) : ans.push(level.reverse());
        flag = flag == 1 ? 0 : 1;
    }
    return ans;
};