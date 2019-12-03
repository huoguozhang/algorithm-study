// 30. 串联所有单词的子串 https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/

const findSubstring = function (s: string, words: Array<string>): Array<number> {
 // 此方法第五个测试用例直接崩了

// s = "barfoothefoobarman",
// words = ["foo","bar"]
// 输出：[0,9]
  let result = []
  const wordLen = words.join('').length
  const len = words.length
  // 考虑边界情况
  if (wordLen > s.length || s.length === 0 || words.length === 0) return result

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

  function runSearch (str, group, prev, indexs) {

    function searchGroup (str, prev, indexs) {
      let index = str.indexOf(group, prev)
      if (index > -1) {
        indexs.push(index)
        prev = index + 1
        // 记录上一次的索引
        searchGroup(str, prev, indexs)
      } {
        return indexs
      }
    }

    searchGroup(s, prev, indexs)


    return indexs
  }


  groups.forEach(group => {
    const indexs = runSearch(s, group,0, [])
    if (indexs.length > 0) result.push(...indexs)
  })
  // @ts-ignore
  return Array.from(new Set(result))
}

export default findSubstring
