// 递归 93. 复原IP地址 https://leetcode-cn.com/problems/restore-ip-addresses/
function restoreIpAddresses (s: string) {
  // 输入: "25525511135"
  // 输出: ["255.255.11.135", "255.255.111.35"]

  // 考虑边界问题
  const len = s.length
  if (len > 12 || len < 4) return []

  const maxDigit = Math.ceil(len / 4) // 计算最大位数

  function findIp(str, digit) {
    if (Number(str) <= 255) {
      return digit
    } else {
      return findIp(str.slice(0, digit), digit - 1)
    }
  }
  let results = []

  for (let j = 1 ; j <= maxDigit ; j++) {
    let i = 0
    let result = []
    while (i < len) {
      let digit = findIp(s.slice(i, i + j), j)
      result.push(s.slice(i, i + digit))
      i = i + digit
    }
    if (result.length === 4) {
      results.push(result)
    }
  }

  return results
}
