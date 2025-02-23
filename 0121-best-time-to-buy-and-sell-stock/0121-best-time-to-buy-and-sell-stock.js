/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let mini = prices[0], profit = 0;
    for(let i=1;i<prices.length;i++){
        cost = prices[i] - mini;
        profit = Math.max(profit, cost);
        mini = Math.min(mini,prices[i]);
    }
    return profit;
};