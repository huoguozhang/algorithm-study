// 914 https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/


const hasGroupsSizeX = function(deck: Array<number>): boolean {
  // [1,2,3,4,4,3,2,1]
  if (deck.length < 2 || deck.length > 10000) return false
  let obj = {}
  deck.forEach(card => {
    obj[card] ? obj[card]++ : (obj[card] = 1)
  })
  // 找到最大公约数
  function gcd(a, b) {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b)
    }
  }
  // 是否能分组
  function makeGroup(obj) {
    // @ts-ignore
    const values = Object.values(obj)
    while (values.length > 1) {
      let a = values.shift()
      let b = values.shift()
      let v = gcd(a, b)
      // 两个数的最大公约数为1直接返回false
      if (v === 1) {
        return false
      }
      values.unshift(v)
    }
    return true
  }
  return makeGroup(obj)
}

export default hasGroupsSizeX
