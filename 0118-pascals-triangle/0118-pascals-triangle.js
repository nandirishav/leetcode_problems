/**
 * @param {number} numRows
 * @return {number[][]}
 */

const generateRow = (row) => {
    let ans = 1;
    const ansRow = [];
    ansRow.push(1);
    for(let col=1;col<row;col++) {
        ans = ans * (row - col);
        ans = ans / col;
        ansRow.push(ans);
    }
    return ansRow;
}

var generate = function(numRows) {
    const ans = [];
    for(let row = 1;row <= numRows; row++) {
        ans.push(generateRow(row));
    }
    return ans;
};