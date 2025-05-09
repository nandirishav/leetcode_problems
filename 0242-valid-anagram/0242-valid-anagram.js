/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }
    const map = new Map();
    for(let i=0;i<s.length;i++){
        map.set(s[i], (map.get(s[i]) || 0) + 1);
    }
    let res = 0;
    for(let i=0;i<t.length;i++){
        if(map.get(t[i])){
            map.set(t[i], map.get(t[i]) - 1);
        } else{
            return false;
        }
    }
    return true;
};