/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let n = sentences.length;
    let maxCount = 0;
    for(let i=0;i<n;i++){
        const sentence = sentences[i];
        let count = sentence.split(" ").length;
        maxCount = Math.max(count,maxCount);
    }
    return maxCount;
};