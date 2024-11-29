/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    const mp = new Map();
    const delimiters = /[ !?',;.\s]+/; // Regex to match any of the delimiters
    const wordsArr = paragraph.split(delimiters).filter((ele) => ele && banned.indexOf(ele) == -1);

    for(word of wordsArr) {
        const loweredWord = word.toLowerCase();
        const inMap = mp.get(loweredWord);
        mp.set(loweredWord, (inMap || 0) + 1);
    }
    console.log(mp, 'mp');
    let res = wordsArr[0].toLowerCase();
    
    for(const [key,value] of mp) {
        if(banned.indexOf(key) == -1 && mp.get(key) >= mp.get(res)){
            res = key;
        }
    }
    return res;
};