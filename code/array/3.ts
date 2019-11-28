// 605 种花问题 https://leetcode-cn.com/problems/can-place-flowers/

const canPlaceFlowers = function(flowerbed: Array<1|0>, n: number): boolean {
  // [1,0,0,0,0,0,1]
  // 最多能种的数量
  let count = 0
  // 记录上一次能种花的点
  let i = 0
  // 前后补零考虑边界问题
  let len = flowerbed.length
  // 三个点能放花是否
  function canPlace(a = 0, b = 0, c = 0) {
    if (b !== 0) {
      return false
    }
    if (a === 0 && c === 0 ) {
      count++
      return true
    }
    return false
  }

  while (i < len) {
    let can = false
    can = canPlace(flowerbed[i - 1], flowerbed[i], flowerbed[i+1])
    if (can) {
      i = i + 2
    } else {
      i++
    }

  }

  return count >= n
}

export default canPlaceFlowers
