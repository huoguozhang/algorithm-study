// 动态规划
// 63. 不同路径 II https://leetcode-cn.com/problems/unique-paths-ii/

const uniquePathsWithObstacles = function (obstacleGrid) {
  // 只考虑最后一步，是上一步向下或者向右走过来的
  // [
  //   [0,0,0],
  //   [0,1,0],
  //   [0,0,0]
  // ]
  let n = obstacleGrid[0].length
  let m = obstacleGrid.length

  if (obstacleGrid[0][0] === 1) {
    return 0
  }
  // 记录到每一个点有多少种方式
  // 点 [i][j] 的方法 = [i-1][j] + [i][j-1]
  // 先算出第一行和第一列的数据
  obstacleGrid[0][0] = 1
  // 遍历第一行的数据
  for (let i = 1; i < n; i++) {
    obstacleGrid[0][i] = (obstacleGrid[0][i - 1] === 1 && obstacleGrid[0][i] === 0) ? 1 : 0
  }
  // 遍历第一列
  for (let i = 1; i < m; i++) {
    obstacleGrid[i][0] = (obstacleGrid[i - 1][0] === 1 && obstacleGrid[i][0] === 0) ? 1 : 0
  }
  // 计算任意点
  for (let i = 1 ; i < m ; i++) {
    for (let j = 1 ; j < n ; j++) {

      if (obstacleGrid[i][j] === 1) {
        obstacleGrid[i][j] = 0
      } else {
        obstacleGrid[i][j] = obstacleGrid[i-1][j] + obstacleGrid[i][j-1]
      }

    }
  }

  return obstacleGrid[m-1][n-1]
}

export default uniquePathsWithObstacles
