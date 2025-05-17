/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    let open = n;
    let close = n;
    let output = "";

    function solve(open,close,output) {
        if(open === 0 && close === 0) {
            res.push(output);
            return;
        }
        if(open !== 0) {
            let op1 = output;
            op1 += '(';
            solve(open - 1,close,op1)
        }
        if(close > open) {
            let op2 = output;
            op2 += ')';
            solve(open,close - 1,op2);
        }
        return;
    }

    solve(open,close,output);
    return res;
};