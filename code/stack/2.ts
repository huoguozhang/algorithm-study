// 85. 最大矩形 https://leetcode-cn.com/problems/maximal-rectangle/
// 用索引来重新定义矩形
// [
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","1","1","1","0"]
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
  // @ts-ignore
  const firstWidth = firstRow[0] & 1
  dp[0][0] = makeDpValue(firstWidth, firstWidth)

  areaSet.add(firstWidth * firstWidth)
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
  function getResult() {
    // @ts-ignore
    const arr = Array.from(areaSet)
    // @ts-ignore
    return arr.length > 0 ? Math.max(...arr) : 0
  }
  if (matrix.length === 1) return getResult()
 // 计算任意点
  for (let row = 1 ; row < colLen ; row++) {
    for (let col = 1 ; col < rowLen ; col++) {
      if (matrix[row][col] === '0') {
        dp[row][col] = makeDpValue()
      } else {
        const top = dp[row - 1][col]
        const left = dp[row][col - 1]
        // 分四种情况判断
        let current = null
        let area = 0
        if (left.width === 0 && top.width === 0) {
          current = makeDpValue(1, 1)
          area = 1
        } else if (left.width === 0) {
          current = makeDpValue(1, top.height + 1)
          area = top.height + 1
        } else if (top.width === 0 ) {
          current = makeDpValue(left.width + 1, 1)
          area = left.width + 1
        } else {
          // 再分两种情况 左边的点或者上方点向当前点扩散
          // 情况1 左边的点扩散
          let area1 = 0
          let area2 = 0
          area1 = Math.min(left.height, top.height + 1) * (left.width + 1)
          area2 = Math.min(left.width + 1, top.width) * (top.height + 1)
          // 上边的点扩散
          area = Math.max(area1, area2)
          if (area1 > area2) {
            current = makeDpValue( (left.width + 1), Math.min(left.height, top.height + 1) )
          } else {
            current = makeDpValue( Math.min(left.width + 1, top.width), (top.height + 1) )
          }
        }

        dp[row][col] = current
        areaSet.add(area)
      }
    }
  }
  return getResult()
}

export default maximalRectangle
