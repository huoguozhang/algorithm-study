// 914 https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/

import {is} from "@babel/types";

const hasGroupsSizeX = function(deck: Array<number>): boolean {
  // [1,2,3,4,4,3,2,1]
  if (deck.length === 1 && deck.length > 10000) return false
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
    let minCount = 0
    Object.keys(obj).forEach(key => {
      if (minCount == 0) minCount = obj[key]
      if (minCount > obj[key]) minCount = obj[key]
    })
    if (minCount === 1) return false
    Object.keys(obj).every(key => {
      return (obj[key] % minCount) === 0
    })
  }
  return makeGroup(obj)
}

export default hasGroupsSizeX
