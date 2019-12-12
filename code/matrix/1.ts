const spiralOrder = function(matrix: Array<Array<number>>): Array<number> {
  let result = []
  function addVal (val) {
    if (val !== undefined) {
      result.push(val)
    }
  }

  while (matrix.length) {
    // 取上面的
    let top = matrix.shift()
    result.push(...top)
    let leaveRowCount = matrix.length
    // 取右边的
    let row = 0
    while (row < leaveRowCount) {
      addVal(matrix[row].pop())
      row++
    }
    // 取下面的
    let bottom = matrix.pop()
    if (bottom && bottom.length) {
      result.push(...bottom.reverse())
    }
    // 取左边的
    let rowIndex = matrix.length - 1
    while (rowIndex > -1) {
      if (matrix[rowIndex] !== undefined && matrix[rowIndex][0] !== undefined) {
        addVal(matrix[rowIndex].shift())
      }
      rowIndex--
    }
  }

  return result
}

export default spiralOrder
