// 89格雷码 https://leetcode-cn.com/problems/gray-code/
const grayCode = function(n: number): Array<number> {
  if (n === 0) return [0]
  const DigitCount = Math.pow(2, n)
  const binaryArr = []
  function fillStr(s, n) {
    return s.length === n ? s : new Array(n - s.length).fill(0).join('') + s
  }
  for (let i = 0 ; i < DigitCount ; i++) {
    binaryArr.push(fillStr(i.toString(2), n))
  }
  return binaryArr.sort((a, b) => {
    for(let i = 0 ; i < n ; i ++) {

    }
  })
}

export default grayCode
