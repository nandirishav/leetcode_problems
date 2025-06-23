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
var widthOfBinaryTree = function(root) {
    let res = 0;
    if (!root) return res;

    const queue = [{ node: root, pos: 0 }]; // pos starts at 0

    while (queue.length) {
        const size = queue.length;
        const levelStart = queue[0].pos; // normalize positions
        let first = 0, last = 0;

        for (let i = 0; i < size; i++) {
            const { node, pos } = queue.shift();
            const curPos = pos - levelStart; // normalize

            if (i === 0) first = curPos;
            if (i === size - 1) last = curPos;

            if (node.left)
                queue.push({ node: node.left, pos: 2 * curPos });
            if (node.right)
                queue.push({ node: node.right, pos: 2 * curPos + 1 });
        }

        res = Math.max(res, last - first + 1);
    }

    return res;
};