/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
    const res = [];
    const n = s.length;
    let op = "";

    function solve(ip,op) {
        if(ip.length === 0) {
            res.push(op);
            return;
        }
        let op1 = op;
        let op2 = op;
        const char = ip[0];
        op1 = op1 + char.toLowerCase(); // small
        op2 = op2 + char.toUpperCase();
        ip = ip.slice(1);

        if(/[a-zA-Z]/.test(char)) {
            solve(ip, op1);
            solve(ip, op2);
        }else {
            solve(ip, op + char);
        }

        return;
    }
    solve(s,op);
    return res;
};