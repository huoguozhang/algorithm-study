// 递归 93. 复原IP地址 https://leetcode-cn.com/problems/restore-ip-addresses/
function restoreIpAddresses (s: string): Array<string> {
  // 输入: "25525511135"
  // 输出: ["255.255.11.135", "255.255.111.35"]
  const results = []
  // 考虑边界问题
  const len = s.length
  if (len > 12 || len < 4) return results

  function search (prev, sub) {
    // 边界条件 已经有4位了并且没有剩余
    if (prev.length === 4 && prev.join('') === s) {
      results.push(prev.join('.'))
    } else {
      const len = Math.min(3, sub.length)
      for (let i = 1 ; i <= len ; i++) {
        // 要是正常的数字001 00 这种排除掉
        let cur = sub.substring(0, i)
        // 前面含0直接终止
        if (cur[0] === '0' && cur.length > 1) {
          continue
        }
        let tmp = Number(cur)
        if (tmp < 256) {
          search(prev.concat(tmp), sub.substring(i))
        }
      }
    }
  }

  search([], s)

  return results
}

export default restoreIpAddresses
