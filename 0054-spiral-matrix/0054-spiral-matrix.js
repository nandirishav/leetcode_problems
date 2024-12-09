/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const n = matrix.length;
    const m = matrix[0].length;
    const res = [];

    let left = 0, right = m - 1;
    let top = 0, bottom = n - 1;

    while(left <= right && top <= bottom){
        //left -> right
        for(let i=left;i<=right;i++){
            res.push(matrix[top][i]);
        }
        top++;
        
        // right - top to bottom
        for(let i=top;i<=bottom;i++){
            res.push(matrix[i][right]);
        }
        right--;

        if(top <= bottom) { // for handling cases when there is only one row
            //bottom - right to left
            for(let i=right;i>=left;i--){
                res.push(matrix[bottom][i]);
            }
            bottom --;
        }

        if(left <= right) {
            //bottom to top
            for(let i=bottom;i>= top;i--){
                res.push(matrix[i][left]);
            }
            left++;
        }
    }
    return res;
};