// 快速排序

export default function quickSort (arr: Array<number>): Array<number> {
  // 基础算法
  function sort (arr) {
    // 递归终止条件
    if (arr.length < 2) {
      return arr
    } else {
      // 设置标点
      let flag = arr[0]
      const left = [] // 每次执行都会新使用内存
      const right = []
      const len = arr.length

      for(let i = 1 ; i < len ; i++){
        let current = arr[i]
        current < flag ? left.push(current) : right.push(current)
      }

      return sort(left).concat(flag, right)
    }
  }

  // 高级算法-用交换位置的方式来代替内存开销
  // 5 9 7 3 1 8 4
  // 第一次循环 9 3、7 1、 9 4 交换位置: 5 3 1 4 7 8 9 => 4 3 1 5 7 8 9
  //
  function sort2 (arr) {

    function swap (arr, i, j) {
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    function findCenter (arr, left, right) {
      let flag = arr[left]
      let index = left + 1 // 游标的索引
      for (let i = index ; i <= right ; i++) {
        if (arr[i] < flag) {
          swap(arr, index, i)
          index++
        }
      }
      // 把标点放到index-1 效果相当于是小值在标点左边大值在标点右边
      swap(arr, left, index - 1)
      return index
    }

    function quick (arr, left, right) {
      if (left < right) {
        const center = findCenter(arr, left, right)
        quick(arr, left, center - 1)
        quick(arr, center, right)
      }
    }

    quick(arr, 0, arr.length - 1)
    return arr
  }

  return sort2(arr)
}
