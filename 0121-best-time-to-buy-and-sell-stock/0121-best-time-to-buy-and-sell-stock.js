/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let bp = prices[0];
  let profit = 0;

  for(let i=1;i<prices.length;i++){
    if(prices[i] < bp){
        bp = prices[i];
    }else if(prices[i] - bp > profit) {
        profit = prices[i] - bp;
    }
  }
  return profit;
};