// 85. 最大矩形 https://leetcode-cn.com/problems/maximal-rectangle/
// 用索引来重新定义矩形
// [
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","0","0","1","0"]
// ]
// => 6
const maximalRectangle = function (matrix: Array<Array<string>>): number {
  // 动态规划 对于任意一个点向上和向左寻找 最大矩形 width height area
  // 首先计算第一行和第一列点的最大面积 width height area
  const firstRow = matrix[0]
  if (matrix.length === 0 || firstRow.length === 0) return 0

  const rowLen = matrix[0].length
  const colLen = matrix.length
  const dp = []  // 和矩形对应 记录每个点的宽高最大面积
  dp[0] = []
  // @ts-ignore
  const areaSet = new Set()
  function makeDpValue (width = 0 , height = 0) {
    return { width, height }
  }

  dp[0][0] = firstRow[0] === '0' ?  makeDpValue() : makeDpValue(1, 1)
  // 行
  for (let i = 1 ; i < rowLen ; i++) {
    const left = dp[0][i - 1]
    // @ts-ignore
    const width = left.width + 1
    areaSet.add(width * 1)
    dp[0][i] = firstRow[i] === '0' ? makeDpValue() : makeDpValue(width, 1)
  }
  // 列
  for (let i = 1 ; i < colLen ; i++) {
    dp[i] = []
    const top = dp[i - 1][0]
    // @ts-ignore
    const height = top.height + 1
    areaSet.add(height * 1)
    dp[i][0] = matrix[i][0] === '0' ? makeDpValue() : makeDpValue(1, height)
  }
 // 计算任意点
  for (let row = 1 ; row < colLen ; row++) {
    for (let col = 1 ; col < rowLen ; col++) {
      if (matrix[row][col] === '0') {
        dp[row][col] = makeDpValue()
      } else {
        const top = dp[row - 1][col]
        const left = dp[row][col - 1]

        const width = Math.min(top.width, left.width + 1)
        const height = Math.min(top.height + 1, left.height)
        areaSet.add(width * height)
        dp[row][col] = makeDpValue(width, height)
      }
    }
  }

  return { areaSet, dp }
}

export default maximalRectangle
