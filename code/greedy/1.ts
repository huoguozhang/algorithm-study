// 贪心算法 追求每次交易利益最大化 降价就卖掉
// 122. 买卖股票的最佳时机2 https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

const maxProfit = function(prices) {
  let count = 0
  const len = prices.length

  for (let i = 0; i < len; i++) {
    // 计算每次利益最大化 (最低点买入，最高点卖出)
    for (let j = i + 1; j < len; j++) {
      if (prices[j] > prices[i]) {
        // 可以卖出了
        count += prices[j] - prices[i]
        i = j
      } else {
        // 卖出
        i = j
      }
    }

  }

  return count

}

export default maxProfit
