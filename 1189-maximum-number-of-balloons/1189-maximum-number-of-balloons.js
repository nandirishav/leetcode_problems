/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const freqMap = {
        b: 0,
        a: 0,
        l: 0,
        o: 0,
        n: 0,
    };
    for(const ch of text){
        freqMap[ch]++;
    }
    const {b,a,l,o,n} = freqMap;
    return Math.floor(Math.min(b,a,l/2,o/2,n));
};