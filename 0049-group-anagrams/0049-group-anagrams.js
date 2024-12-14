/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const getSignature = (str) => {
    const count = Array(26).fill(0);
    for(const ch of str){
        count[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    const res = [];
    for(let i=0;i<26;i++){
        if(count[i] !== 0){
            res.push(String.fromCharCode('a'.charCodeAt(0) + i), count[i]);
        }
    }
    return res.join('');
}


var groupAnagrams = function(strs) {
    // Since anagrams share the same character frequencies, we compare signatures
    // of each word and group them
    const res = [];
    const groups = new Map();
    for(const str of strs) {
        const signature = getSignature(str);
        console.log(signature, 'signature');
        if(!groups.has(signature)){
            groups.set(signature, []);
        }
        groups.get(signature).push(str);
    }

    for(let items of groups.values()) {
        res.push(items);
    }
    return res;
};