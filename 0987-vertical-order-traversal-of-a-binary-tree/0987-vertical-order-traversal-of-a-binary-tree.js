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
var verticalTraversal = function(root) {
    if (!root) return [];

    const map = new Map(); // line => array of [level, value]
    const queue = [{ node: root, line: 0, level: 0 }];
    let minLine = 0, maxLine = 0;

    while (queue.length) {
        const { node, line, level } = queue.shift();

        if (!map.has(line)) map.set(line, []);
        map.get(line).push([level, node.val]);

        minLine = Math.min(minLine, line);
        maxLine = Math.max(maxLine, line);

        if (node.left) queue.push({ node: node.left, line: line - 1, level: level + 1 });
        if (node.right) queue.push({ node: node.right, line: line + 1, level: level + 1 });
    }

    const result = [];

    for (let i = minLine; i <= maxLine; i++) {
        const entries = map.get(i);
        entries.sort((a, b) => {
            if (a[0] === b[0]) return a[1] - b[1]; // Same level, sort by value
            return a[0] - b[0]; // Sort by level
        });
        result.push(entries.map(([level, val]) => val));
    }

    return result;
};
