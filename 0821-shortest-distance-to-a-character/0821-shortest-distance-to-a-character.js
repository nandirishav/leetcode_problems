/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    // store index of c
    const cIdxes = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === c) {
            cIdxes.push(i);
        }
    }
    let idx = 0;
    const res = [];
    for(let i=0;i<s.length;i++) {
        console.log(i, 'currentIdx', idx, 'idx');
        if(Math.abs(cIdxes[idx + 1] - i) < Math.abs(i - cIdxes[idx])){
                idx++;
        }
        if(s[i] === c) {
            res.push(0);
        }else {            
            const distance = Math.abs(i - cIdxes[idx]);
            res.push(distance);
        }
    }
    return res;
};