function quickSort (arr) {
  function sort(arr) {
    const left = []
    const right = []
    if (arr.length < 2) {
      return arr
    }
   let flag = arr[0]
    for (let i = 1 ; i < arr.length ; i++) {
      if (arr[i] < flag) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }

    return sort(left).concat(flag, sort(right))
  }
  return sort(arr)
}
// 5 2 3 4 1 8 6 9 7
//           ^
function quickSort2 (arr) {

  function swap (i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }

  function findCenter(arr, left, right) {
    let flag = arr[left]
    let index = left + 1
    for (let i = index ; i <= right ; i++) {
      if (arr[i] < flag) {
        swap(i, index)
        index++
      }
    }

    swap(left,index - 1)
    return index - 1
  }

  function sort(arr, left, right) {
    if (left < right) {
      let center = findCenter(arr, left, right)
      sort(arr, left, center)
      sort(arr, center + 1, right)
    }
    return arr
  }

  return sort(arr, 0, arr.length - 1)

}
