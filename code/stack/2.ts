// 85. 最大矩形 https://leetcode-cn.com/problems/maximal-rectangle/
// 用索引来重新定义矩形 参考leetcode官方截图
// [
//   ["1","0","1","0","0"],
//   ["1","0","1","1","1"],
//   ["1","1","1","1","1"],
//   ["1","1","1","1","0"]
// ]
// => 6
// 方法一
const maximalRectangle = function (matrix: Array<Array<string>>): number {
  // 动态规划 对于任意一个点向上和向左寻找 最大矩形 width height area
  // 首先计算第一行和第一列点的最大面积 width height area
  let maxArea = 0
  const firstRow = matrix[0]
  if (matrix.length === 0 || firstRow.length === 0) return maxArea

  const rowLen = matrix[0].length
  const colLen = matrix.length
  const dp = []  // 记录每个点的宽高
  dp[0] = []

  function makeMaxArea (area) {
    maxArea = Math.max(maxArea, area)
  }

  function makeDpValue (width = 0 , height = 0) {
    return { width, height }
  }
  // @ts-ignore
  const firstWidth = firstRow[0] & 1
  dp[0][0] = makeDpValue(firstWidth, firstWidth)

  makeMaxArea(firstWidth * firstWidth)
  // 行
  for (let i = 1 ; i < rowLen ; i++) {
    const left = dp[0][i - 1]
    const curr = matrix[0][i]
    // @ts-ignore
    const width = curr === '1' ? (left.width + 1) : 0
    makeMaxArea(width)
    dp[0][i] = firstRow[i] === '0' ? makeDpValue() : makeDpValue(width, 1)
  }
  // 列
  for (let i = 1 ; i < colLen ; i++) {
    dp[i] = []
    const top = dp[i - 1][0]
    const curr = matrix[i][0]
    // @ts-ignore
    const height = curr === '1' ? top.height + 1 : 0
    makeMaxArea(height)
    dp[i][0] = matrix[i][0] === '0' ? makeDpValue() : makeDpValue(1, height)
  }

  function getMaxArea (dp, row, col) {
    // 向上寻找 最大矩形
    const current = dp[row][col]
    const currentRow = row // 保存当前行

    makeMaxArea(current.width)
    // 以最短的为准
    let minWidth = current.width

    row--
    while (row > -1 && dp[row][col].width) {
      minWidth = Math.min(minWidth, dp[row][col].width)
      makeMaxArea(minWidth * (currentRow - row + 1 ))
      row--
    }
  }
 // 计算任意点
  for (let row = 1 ; row < colLen ; row++) {
    for (let col = 1 ; col < rowLen ; col++) {
      if (matrix[row][col] === '0') {
        dp[row][col] = makeDpValue()
      } else {
        const top = dp[row - 1][col] || makeDpValue()
        const left = dp[row][col - 1] || makeDpValue()
        const current = makeDpValue(
          left && left.width ? left.width + 1 : 1,
          top && top.height ? top.height + 1 : 1
        )
        dp[row][col] = current
        // 计算矩形面积
        if (current.width === 1 || current.height === 1) {
          makeMaxArea(Math.max(current.width, current.height))
        } else {

          // 计算可能的最大面积
          getMaxArea (dp, row, col)

        }
      }
    }
  }


  return maxArea
}
// 方法二将每一行转化为柱状图 计算柱状图 栈的方式
const maximalRectangle2 = function(matrix) {
  if (matrix.length === 0) return 0
  let maxArea = 0
  // 假设某一行是 [1, 2, 3, 4, 3, 2, 1]
  const largestRectangleArea = function(heights) {
    let k = 0
    let stack = []
    while (k <= heights.length) {
      if (stack.length === 0 || heights[k] >= heights[stack[stack.length - 1]]) {
        stack.push(k++)
      } else {
        let height = heights[stack.pop()]
        let width = stack.length === 0 ? k : k - stack[stack.length - 1] - 1
        maxArea = Math.max(maxArea, height * width)
      }
    }

  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      let top = i === 0 ? 0 : Number( matrix[i - 1][j] )
      // 每个位置只记录自己的高
      matrix[i][j] = matrix[i][j] === '0' ? 0 : top + 1
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    largestRectangleArea( matrix[i] )
  }

  return maxArea
}
export default maximalRectangle2
