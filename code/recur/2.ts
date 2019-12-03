// 30. 串联所有单词的子串 https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/

const findSubstring = function (s: string, words: Array<string>): Array<number> {
// s = "barfoothefoobarman",
// words = ["foo","bar"]
// 输出：[0,9]
  let result = []
  const wordLen = words.join('').length
  const len = words.length
  // 考虑边界情况
  if (wordLen > s.length) return result
  // 需要存储可能的组合
  const groups = []

  function makeGroup (prev, arr) {
    if (prev.length === len) {
      // 递归终止条件
      groups.push(prev.join(''))
    } else {
      const L = arr.length
      // words每项都可能作为当前位置的项
      for (let i = 0 ; i < L ; i++) {
        const copy = arr.slice(0)
        copy.splice(i, 1)
        makeGroup(prev.concat(arr[i]), copy)
      }
    }
  }

  makeGroup([], words)

  function search (indexs, str, group) {
    let index = str.indexOf(group)
    if (index > -1) {
      indexs.push(index)
      search(indexs, str.slice(index + group.length), group)
    } {
      return indexs
    }
  }

  groups.forEach(group => {
    const indexs = search([], s, group)
    if (indexs.length > 0) result.push(...indexs)
  })

  return Array.from(new Set(result))
}

export default findSubstring
