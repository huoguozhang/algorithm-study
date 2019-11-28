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
      let result = []
      let prev = make(n - 1)
      for (let i = 0 ; i < prev.length ; i++) {
        result.push('0' + prev[i])
      }
     const prevMirror = prev.reverse()
      for (let i = 0 ; i < prevMirror.length ; i++) {
        result.push('1' + prevMirror[i])
      }
      return result
    }
  }
  const arr = make(n)
  return arr.map(v => parseInt(v, 2))
}

export default grayCode
