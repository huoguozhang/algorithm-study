//  设计循环队列 https://leetcode-cn.com/problems/design-circular-queue/solution/
// 题目要求不能使用内置库，其实不能使用数组的shift()和push（）这样太简单了0.0

class MyCircularQueue1 {
  list: Array<number>
  size: number

  constructor (k) {
    this.size = k
    this.list = []
  }
  Front () {
    return !this.isEmpty() && this.list[0] > -1 ? this.list[0] :  -1
  }
  Rear () {
    const r = this.list[this.list.length - 1]
    return !this.isEmpty() && r > -1 ? r : -1
  }
  enQueue (value) {
    if (this.isFull()) return false
    this.list.push(value)
    return true
  }
  deQueue () {
    if (this.isEmpty()) return false
    this.list.shift()
    return true
  }
  isEmpty () {
    return this.list.length === 0
  }
  isFull () {
    return this.list.length === this.size
  }
}

export default class MyCircularQueue2 {
  list: Array<number>
  size: number
  start: number
  end: number
  constructor (k) {
    this.size = k
    this.list = new Array(k)
    this.start = 0 // 队首
    this.end = 0 // 队尾
  }
  // 通过指针的方式模拟出push shift length这些api操作
  Front () {
    return this.isEmpty() ? -1: this.list[this.start]
  }
  Rear () {
    return this.isEmpty() ?  -1 : this.list[(this.size + this.end - 1) % this.size ]
  }
  enQueue (value) {
    if (this.isFull()) return false
    this.list[this.end] = value
    this.end = (this.end + 1) % this.size
    return true
  }
  deQueue () {
    if (this.isEmpty()) return false
    this.list[this.start] = undefined
    this.start = (this.start + 1) % this.size
    return true
  }
  isEmpty () {
    return this.start === this.end && this.list[this.start] === undefined
  }
  isFull () {
    return this.end === this.start && this.list[this.start] > -1
  }
}
