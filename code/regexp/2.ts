// 10. 正则表达式匹配 https://leetcode-cn.com/problems/regular-expression-matching/

const isMatch = function(s: string, p: string): boolean {
  // s = "mississippi"
  // p = "mis*is*p*."
  // ab .*c
  let matched = (s, p) => {
    if (p.length === 0) return !s.length

    let indexMatch = false
    if (p[0] === s[0] || (s[0] && p[0] === '.')) {
      indexMatch = true
    }

    if (p[1] === '*') {
      // 先考虑*代表0个的情况
      // b .*c
      return matched(s, p.slice(2)) || (indexMatch && matched(s.slice(1), p))
    } else {
      // 不含*递归执行函数
      return indexMatch && matched(s.slice(1), p.slice(1))
    }

  }

  return matched(s, p)
}

export default isMatch
