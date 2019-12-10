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

function quickSort2 (arr) {
  function sort(arr) {
   let flag = arr[0]
    let index  = 0 // 用index的方式
    for (let i = 1 ; i < arr.length ; i++) {
      if (arr[i] < flag) {

      } else {

      }
    }

  }
  return sort(arr)
}
