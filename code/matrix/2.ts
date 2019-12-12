// 48. 旋转图像 https://leetcode-cn.com/problems/rotate-image/
const rotate = function(matrix) {
  const len = matrix.length
  if (len < 2) {
    return matrix
  }
  function swap (row, col) {
    [matrix[row][col], matrix[col][len - 1 - row]] = [matrix[col][len - 1 - row], matrix[row][col], ]
  }
  // 旋转90度满足
  // a[row][col] = a[col][len - 1 - row]

}

export default rotate
