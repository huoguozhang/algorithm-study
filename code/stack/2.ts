// 85. 最大矩形 https://leetcode-cn.com/problems/maximal-rectangle/
// 用索引来重新定义矩形
// [
//   ["1","0","1","0","0"], => []
//   ["1","0","1","1","1"], => [[2,4]]
//   ["1","1","1","1","1"], => [[0,5]] => 2 * 3 = 6
//   ["1","0","0","1","0"]  => []
// ]
// => 6
const maximalRectangle = function (matrix: Array<Array<string>>): number {
  let result = 0
  if(matrix.length === 0) return result
  const reg = /1{2,}/g

  const arr = matrix.map(row => {
    const str = row.join('')
    let r = reg.exec(str)
    const item = []
    while (r) {
      item.push({
        start: r.index,
        end: r[0].length
      })
      r = reg.exec(str)
    }
    return item
  })

  console.log(arr)
  // 存储矩形的面积
  const maxRectAreas = []

  function maxRect(arr, n = 1) {
    let current = arr.pop()
    let next = arr.pop()
    let start = -1
    let end = -1
    n++ // 第一次已经处理2行数据
    if (n < 3) {
      if (current.length === 0)  return false

      if (next.length > 0) {
        // 求得最小的
      }

    }
  }

  maxRect(arr.splice(0), 1)
}

export default maximalRectangle
