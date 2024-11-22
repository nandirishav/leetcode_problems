/**
 * @param {string[]} words
 * @return {number}
 */
var maximumNumberOfStringPairs = function(words) {
    const obj = {};
    for(let word of words) {
        const revereWord = word.split('').reverse().join('')
        if(obj[revereWord]) {
            obj[revereWord] += 1;
        } else{
            obj[word] = 1;
        }
    }

    console.log(obj, 'obj')

    let count = 0;
    for(let word of words) {
        if(obj[word] == 2) {
            count += 1;
        }
    }
    return count;
};