// 89格雷码 https://leetcode-cn.com/problems/gray-code/
const grayCode = function(n: number): Array<number> {
  if (n === 0) return [0]
  function make(n) {
    if (n === 1) {
      return ['0', '1']
    } else {
      // 0   1
      // 00  01  11  10
      // 000 001 011 010 110 111 101 100
      let prev = make(n - 1)
      const len = prev.length
      let result = new Array(len * 2)
      let max = result.length - 1
      for (let i = 0 ; i < len ; i++) {
        result[i] = '0' + prev[i]
        result[max - i] = '1' + prev[i]
      }
      return result
    }
  }
  const arr = make(n)
  return arr.map(v => parseInt(v, 2))
}

export default grayCode
