/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if(n === 1)
        return "1";
    
    const say = countAndSay(n - 1);
    // process
    let res = "";
    for(let i=0; i < say.length; i++) {
        const ch = say[i];
        let count = 1;
        while(i < say.length - 1 && say[i] == say[i+1]) {
            count++;
            i++;
        }
        res += String(count) + ch;
    }
    return res.toString();
};