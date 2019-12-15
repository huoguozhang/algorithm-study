// 48. 旋转图像 https://leetcode-cn.com/problems/rotate-image/
/*
[                                  [             沿753对换  [
  [1,2,3],  先将 4 5 6旋转            [ 7 8 9]    最终结果     [7, 4, 9]
  [4,5,6], ====================>>    [ 4 5 6]   =========>   [8, 5, 2]
  [7,8,9]                            [ 1 2 3]                [9, 6, 3]
],                                  ]                       ]

*/
const rotate = function (matrix) {
  const len = matrix.length

  if (len < 2) {
    return matrix
  }

  function swap ([r1, c1], [r2, c2]) {
    [matrix[r1][c1], matrix[r2][c2]] = [matrix[r2][c2], matrix[r1][c1]]
  }

  // 步骤一:
  for (let i = 0 ; i < len/2 ; i++) {
    for (let j = 0 ; j < len ; j++) {

      swap([i, j], [len - 1 - i, j])

    }
  }


  for (let i = 1 ; i < len ; i++) {
    for(let j = 0 ; j < i; j++) {
      swap([i, j], [j,i])
    }
  }

  return matrix
}

export default rotate
