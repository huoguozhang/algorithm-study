// 冒泡排序
export default (arr: Array<number>) => {
  for (let i = arr.length -1 ; i > 0 ; i--) {
    // 控制循环的长度，已经排好的不需要排了
    for (let j = 0 ; j < i ; j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]]
      }
    }
  }
  return arr
}
