// 696. 计数二进制子串
// 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，并且这些子字符串中的所有0和所有1都是组合在一起的。
//
// 重复出现的子串要计算它们出现的次数
export default function countBinarySubstrings(s: string): number {
  // 0011
  let len = s.length
  let n = 0
  let current = 1 // 记录当前相同值
  let pre = 0 // 记录上一次相同的值是多少
  for(let i = 0 ; i < len ; i++){
    if (s[i] === s[i + 1]) {
      current++
    } else {
      if (pre > 0) {
        n += Math.min(current, pre)
      }
      pre = current
      current = 1
    }
  }
  return n
}
//
 // "00110011"
// 找出组合
 /* function run(s, result = []) {
    let isBreak = false
    const match = (str) => {
      let first = str.match(/^(0+|1+)/)[0]
      let second = (first[0] ^ 1).toString().repeat(first.length)
        let reg = new RegExp(`^(${first}${second})`)
        let item = str.match(reg)
        return item && item[0]
    }
    for (let i = 0; i < s.length - 1; i++) {
      let r = match(s.slice(i))
      if (r) {
        result.push(r)
      }
      if (isBreak) break
    }
    return result
  }

  return run(s).length*/
