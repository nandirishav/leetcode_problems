/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
    const commonCharacterCounts = Array(26).fill(0);
    const res = [];

    for (let i=0;i<words[0].length;i++) {
        commonCharacterCounts[words[0].charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 1;i < words.length; i++) {
        const currentCharacterCounts = Array(26).fill(0);
        
        for(ch of words[i]) {
            currentCharacterCounts[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }

        for(let j=0;j<26;j++) {
            commonCharacterCounts[j] = Math.min(commonCharacterCounts[j], currentCharacterCounts[j]);
        }
    }

    for(let k=0;k<26;k++) {
        for(let count = 0;count< commonCharacterCounts[k];count++){
            res.push(String.fromCharCode(k + 'a'.charCodeAt(0)));
        }
    }
    return res;
};