/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for(let i = left; i <= right; i++){
        const word = words[i];
        if(vowels.includes(word[0]) && vowels.includes(word[word.length - 1])){
            count++;
        }
    }
    return count;
};