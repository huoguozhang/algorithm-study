// 914 https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/


const hasGroupsSizeX = function(deck: Array<number>): boolean {
  // [1,2,3,4,4,3,2,1]
  if (deck.length < 1 && deck.length > 10000) return false
  let obj = {}
  let isOver = false
  deck.forEach(card => {
    if (card > 10000 || card < 0) {
      return isOver = true
    }
    obj[card] ? obj[card]++ : (obj[card] = 1)
  })
  if (isOver) {
    return false
  }
  // 是否能分组
  function makeGroup(obj) {
    let minCount = 0, maxCount = 0
    Object.keys(obj).forEach((key, i) => {
      if (i === 0) {
        minCount = obj[key]
        maxCount = obj[key]
      }
      if (minCount > obj[key]) minCount = obj[key]
      if (maxCount < obj[key]) maxCount = obj[key]
    })
    function findGongYue (min, max) {
      let result = 0
      for(let i = 2; i <= min ; i++ ) {
        if (min % i === 0 && max % i === 0) {
          result = i
          break
        }
      }
      return result
    }
    if (minCount === 1) return false

    let num = findGongYue(minCount, maxCount)
    if (num === 0) return false
    return Object.keys(obj).every(key => {
      return (obj[key] % num) === 0
    })

  }
  return makeGroup(obj)
}

export default hasGroupsSizeX
