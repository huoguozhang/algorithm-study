// 堆排序

export default class Heap {
  data: Array<number>
  constructor (data) {
    // 构建整树
   this.data = data
  }
  sort () {
    let arr = this.data
    const len = arr.length
    if (len <= 1) {
      return arr
    }
    for (let i = Math.floor(arr.length / 2) ; i >= 0 ; i--) {
      this.maxHeap(arr, i, len)
    }

    for (let j = 0 ; j < len ; j++) {
      // 将最大值放到最后一位
      this.swap(arr, 0, len - 1 - j)
      //
      this.maxHeap(arr, 0, len - 1 - j - 1)
    }

    return arr
  }
  swap (arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]]
  }
  sort2 (arr) {
    const len = arr.length
    if (len <= 1) {
      return arr
    }
    for (let i = Math.floor(arr.length / 2) ; i >= 0 ; i--) {
      this.maxHeap2(arr, i, len)
    }

    for (let j = 0 ; j < len ; j++) {
      this.swap(arr, 0, len - 1 - j)
      //
      this.maxHeap2(arr, 0, len - 1 - j - 1)
    }

    return arr
  }
  maxHeap2 (arr, i, size) {
    // 构建最后父节点最大堆
    let left = 2 * i + 1
    let right = 2 * i + 2
    let large = i

    if (left < size && arr[left].val > arr[large].val) {
      large = left
    }

    if (right < size && arr[right].val > arr[large].val) {
      large = right
    }

    if (large !== i) {
      this.swap(arr, large, i)
      this.maxHeap2(arr, large, size)
    }
  }
  maxHeap (arr, i, size) {
    // 构建最后父节点最大堆
    let left = 2 * i + 1
    let right = 2 * i + 2
    let large = i

    if (left < size && arr[left] > arr[large]) {
      large = left
    }

    if (right < size && arr[right] > arr[large]) {
      large = right
    }

    if (large !== i) {
      this.swap(arr, large, i)
      this.maxHeap(arr, large, size)
    }
  }
}

// 题目 451. 根据字符出现频率排序 https://leetcode-cn.com/problems/sort-characters-by-frequency/
//
let frequencySort = function(s) {
  const len = s.length
  if (len <= 2) {
    return s
  }
  const keyCountMap = {} // {a: 1, B: 2, c:3}

  for (let i = 0 ; i < len ; i++) {
    let key = s[i]
    if (keyCountMap[key]) {
      keyCountMap[key]++
    } else {
      keyCountMap[key] = 1
    }
  }

  // @ts-ignore 变为一个数组
  let keyCountArr = Object.entries(keyCountMap).map(kv => {
    return {
      key: kv[0],
      val: kv[1]
    }
  })
  const h = new Heap([])
  h.sort2(keyCountArr)
  keyCountArr.reverse()
  return keyCountArr.map(v => v.key.repeat(v.val)).join('')
}


export {
  frequencySort
}
