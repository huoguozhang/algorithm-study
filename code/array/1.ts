// 17 https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
// 方式一
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

// 方法2 递归

export function letterCombinations2 (str: string): Array<string> {
  // 对输入做处理，如果小于1返回空（LeetCode测试用例）
  if (str.length < 1) return []
  // 建立电话号码键盘映射
  let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  // 如果只给了一个按键，直接把按键内容取出来并按单个字符分组就可以了（LeetCode测试用例）
  if (str.length === 1) return map[str].split('')
  // 把输入字符串按单字符分隔变成数组，234=>[2,3,4]
  let nums = str.split('')
  // 保存键盘映射后的字母内容，如 23=>['abc','def']
  let codes = nums.map(num => map[num])

  function comb (arr) {
    let tmp = []
    // 第二步 重新组合 [['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],'ghi']
    for (let i = 0; i < arr[0].length ; i++) {
      for (let j = 0 ; j < arr[1].length ; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`)
      }
    }
    arr.splice(0, 2, tmp)

    if (arr.length > 1) {
      comb(arr)
    } else {
      return tmp
    }
    return arr[0]
  }
  return comb(codes)
}
