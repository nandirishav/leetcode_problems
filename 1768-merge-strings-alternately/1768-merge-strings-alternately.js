/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let w1 = 0;
    let w2 = 0;
    let res = "";
    const w1Len = word1.length;
    const w2Len = word2.length;

    while(w1 < w1Len && w2 < w2Len) {
        res += word1[w1];
        res += word2[w2];
        w1++;
        w2++;
    }

    if(w1 === w1Len && w2 < w2Len) {
        for(let i=w2;i<w2Len;i++){
            res += word2[i]; 
        }
    }
    else if(w2 === w2Len && w1 < w1Len) {
        for(let i=w1;i<w1Len;i++){
            res += word1[i]; 
        }
    }
    return res;
};