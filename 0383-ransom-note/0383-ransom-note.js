/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
     const map = new Map();
    for(let i=0;i<magazine.length;i++){
        map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
    }
    let res = 0;
    for(let i=0;i<ransomNote.length;i++){
        if(map.get(ransomNote[i])){
            map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
        } else{
            return false;
        }
    }
    return true;
};