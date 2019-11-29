// 10. 正则表达式匹配 https://leetcode-cn.com/problems/regular-expression-matching/

const isMatch = function(s: string, p: string) {
  // 两个true的例子
  // s = "ab"
  // p = ".*"
  // s = "aab"
  // p = "c*a*b"
  const len = s.length
  let count = 0
  let pAll = []
  const All = '@'
  // 找到含有*的
  let str = ''
  for (let i = 0 ; i < p.length ; i++) {
    if (p[i] === '*') {
      pAll.push(p[i -1] + p[i])
      str = str.slice(0, -1)
      str += All
    } else {
      str += p[i]
    }
  }
  let leaveStr = ''
  const notIncludeStrArr = []
  // 匹配s p 非特殊字符部分
  let prev = 0
  for (let i = 0 ; i < len ; i++) {
    if (s[i] == p[i]) {
      prev = i
    }
  }
}

export default isMatch
