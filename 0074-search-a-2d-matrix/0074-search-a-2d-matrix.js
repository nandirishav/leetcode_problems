/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let i = 0, j = n - 1;
    console.log(i,j)
    while(i < m && j >= 0) {
        const currentElement = matrix[i][j];
        if (currentElement === target){
            return true;
        }
        else if (currentElement < target) {
            i++;
        }else {
            j--;
        }
    }
    return false;
};