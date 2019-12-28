// 787. K 站中转内最便宜的航班
// https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/

const findCheapestPrice = function (n, flights, src, dst, K) {
  // @ts-ignore 记录src 到每个城市的最便宜的值
  let dp = new Array(n).fill(Infinity)
  dp[src] = 0
  for (let i = 0 ; i <= K ; i++) {
    let arr = dp.slice(0)
    // 找到 0到k次中转 花费钱最少的情况
    for (let j = 0 ; j < flights.length ; j++) {
      let currentSrc = flights[j][0]
      let currentDst = flights[j][1]
      let currentCost = flights[j][2]
      arr[currentDst] = Math.min(arr[currentDst], dp[currentSrc] + currentCost)
    }
    dp = arr.slice(0)
  }

  return dp[dst] === Infinity ? -1 : dp[dst]

}

export default findCheapestPrice
