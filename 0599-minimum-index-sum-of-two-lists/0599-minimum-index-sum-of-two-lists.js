/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    const n1 = list1.length;
    const n2 = list2.length;
    let minSum = Number.MAX_VALUE;
    const map = new Map();
    let res = [];

    for(let i=0;i<n1;i++){
        map.set(list1[i], i);
    }

    for(let j=0;j<n2;j++){
        if(map.has(list2[j])){
            let sum = j + map.get(list2[j]);
            if(sum < minSum){
                res = [];
                minSum = sum;
                res.push(list2[j]);
            }
            else if(sum === minSum){
                res.push(list2[j])
            }
        }
    }  

    return res;
};