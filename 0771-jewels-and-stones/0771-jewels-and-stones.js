/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
    const map = new Map();
    for(let i=0;i<jewels.length;i++){
        map.set(jewels[i], (map.get(jewels[i]) || 0) + 1);
    }
    console.log(map, 'map')
    let res = 0;
    for(let i=0;i<stones.length;i++){
        if(map.get(stones[i])){
            res++;
        }
    }
    return res;
};