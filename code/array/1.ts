// 17 https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
const letterCombinations = function(digits: string): Array<string> {
  const numLetterMap = {
    2: ['a', 'b','c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
  }
  let len = digits.length
  let result = []
  for (let i = 0 ; i < len ; i++ ) {
    if (i === 0) {
      result.push(...numLetterMap[digits[i]])
    } else {
      const resultCopy = result.slice(0)
      result = []
      resultCopy.forEach(r => {
        numLetterMap[digits[i]].forEach(v => {
          result.push(r + v)
        })
      })
    }
  }
  return result
}

export default letterCombinations
