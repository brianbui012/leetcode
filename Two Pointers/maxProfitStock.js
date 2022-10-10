var maxProfit = function(prices) {
    let cheapestPrice = prices[0];
    let maxValue = -Infinity; 
    
    for(let windowEnd = 1; windowEnd < prices.length; windowEnd++) {
        let currentPrice = prices[windowEnd];
        
        if(currentPrice < cheapestPrice) {
            cheapestPrice = currentPrice;
            continue;
        }
        
        maxValue = Math.max(maxValue, currentPrice - cheapestPrice);   
    }
    
    if(maxValue === -Infinity) {
        return 0;
    }
    return maxValue;
};