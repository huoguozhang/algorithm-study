// 922. 按奇偶排序数组 II https://leetcode-cn.com/problems/sort-array-by-parity-ii/

function sort(A:Array<number>): Array<number> {
  const result = []
  let jIndex = 1
  let oIndex = 0
  A.forEach(v => {
    if (v % 2 === 0) {
      result[oIndex] = v
      oIndex += 2
    } else {
      result[jIndex] = v
      jIndex += 2
    }
  })

  return result
}

export default sort
