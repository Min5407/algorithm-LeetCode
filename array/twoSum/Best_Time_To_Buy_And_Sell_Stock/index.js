export const maxProfit = (prices) => {
  let result = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const initialProfit = prices[j] - prices[i];
      if (initialProfit > result) {
        result = initialProfit;
      }
    }
  }

  return result;
};
