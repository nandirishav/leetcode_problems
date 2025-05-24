/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    const n = coins.length;
    const t = Array.from({length: n + 1}, ()=> Array(amount + 1).fill(0));

    for(let i=0;i<=n;i++){
        t[i][0] = 1;
    }

    for(let i=1;i<=n;i++){
        for(let j=0;j<=amount;j++){
            if(coins[i-1] <= j){
                t[i][j] = t[i][j-coins[i-1]] + t[i-1][j];
            }else{
                t[i][j] = t[i-1][j];
            }
        }
    }
    return t[n][amount];
};