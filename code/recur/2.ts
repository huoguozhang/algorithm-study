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

  //
}
// s = "barfoothefoobarman",
// words = ["foo","bar"]
const findSubstring2 = function (s: string, words: Array<string>): Array<number> {
  // 转换思路 用word直接去比对s判断所有的位置是否连续
   let result = []
  const wordsStrLen = words.join('').length
  const wordsLen = words.length
  const sLen = s.length
  // 考虑边界情况
  if (wordsStrLen > sLen || sLen === 0 || wordsLen === 0) return result

  // 收集每次字母的位置 // 每一项都是{ word: xxx, start: index, end: ''}
  let positions = []

  function searchWord (indexs, str, prev, w) {
      let index = str.indexOf(w, prev)
      if (index > -1) {
        indexs.push(index)
        prev = index + 1
        // 记录上一次的索引
        searchWord(indexs, str, prev, w)
      } {
        return indexs
      }
    }

   // 记录匹配数量最少的word和其数量
  const wordPosCount = {}
  // 需要判断是否包含所有的单词
  // @ts-ignore
  const hasWord = new Set()
  const includeAllWord = words.every(word => {
    if (hasWord.has(word)) {
      return true
    }
    const indexs = searchWord([], s, 0, word)
    if (indexs.length === 0) {
      return false
    } else {
      hasWord.add(word)
      if (!wordPosCount.hasOwnProperty(word)) {
        (wordPosCount[word] = 0)
      }
      wordPosCount[word] += indexs.length
      positions.push(...indexs.map(i => ({
        word,
        start: i,
        end: i + word.length})
      ))
      return true
    }
  })

  if (!includeAllWord) return result

  positions = positions.sort((a, b) => a.start - b.start)
  // 找到匹配最少次数的word
  let minK = ''
  // @ts-ignore
  let minV = Number.MAX_SAFE_INTEGER
  // @ts-ignore
  for (let [k, v] of Object.entries(wordPosCount)){
    if (v < minV) {
      minV = v
      minK = k
    }
  }
  // 一条线上找一旦没有找到把前面的线都剪掉
  while (positions.length >= wordsLen) {
    const first = positions[0]
    let next = first.end
    // @ts-ignore 哪些key是已经存在的
    const wordsCopy = words.slice(0)
    // 是否中间就中断了
    let breakIndex = -1
    for(let i = 1 ; i < wordsLen ; i++) {
      // @ts-ignore
      const pos = positions.find(v => v.start === next)
      if (!pos) {
        breakIndex = i
        break
      }
      const wordIndex = wordsCopy.indexOf(pos.word)
      if (wordIndex < 0) {
        breakIndex = i
        break
      }
      next = pos.end
      wordsCopy.splice(wordIndex, 1)
    }
    // 这条线匹配到了
    if (breakIndex === -1 && wordsCopy[0] === first.word && next === first.start + wordsStrLen) {
     result.push(first.start)
    }

    positions.shift()
  }

  return result
}
export default findSubstring2
