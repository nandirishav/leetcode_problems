/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    const n = coins.length;
    const t = Array.from({length: n+1}, ()=> Array(amount + 1).fill(0));

    // initialisation
    for(let j=0;j<=amount;j++){
        t[0][j] = Number.MAX_SAFE_INTEGER - 1;
    }
    for(let i=0;i<=n;i++){
        t[i][0] = 0;
    }
    for(let j=1;j<=amount;j++){
        if(j % coins[0] === 0){
            t[1][j] = j / coins[0];
        }else {
            t[1][j] = Number.MAX_SAFE_INTEGER - 1;
        }
    }
    for(let i=2;i<= n;i++){
        for(let j=1;j<= amount;j++){
            if(coins[i-1] <= j){
                t[i][j] = Math.min(t[i][j-coins[i-1]] + 1, t[i-1][j]);
            }else{
                t[i][j] = t[i-1][j];
            }
        }
    }
    return t[n][amount] === Number.MAX_SAFE_INTEGER - 1 ? -1: t[n][amount];
};