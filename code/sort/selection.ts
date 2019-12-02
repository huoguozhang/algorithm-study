// 选择排序 选择最小的放前面

export default (arr: Array<number>): Array<number> => {
  for (let i = 0 ; i < arr.length ; i++) {
    // 和剩下未排序的作比较
    for (let j = i ; j < arr.length ; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
      }
    }
  }
  return arr
}
