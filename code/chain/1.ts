// 增加链表题型  148. 排序链表  https://leetcode-cn.com/problems/sort-list/
// 声明链表的节点

class Node {
  val: number
  next: any
  constructor (value) {
    this.val = value
    this.next = undefined
  }
}

// 声明链表的数据结构

class NodeList {
  constructor (arr) {
    // 声明链表的头部节点
    let head = new Node(arr.shift())
    let next = head
    arr.forEach(item => {
      next.next = new Node(item)
      next = next.next
    })
    return head
  }
}
// 方法一 快速排序
// 交换两个节点的值
let swap = (p, q) => {
  let val = p.val
  p.val = q.val
  q.val = val
}

// 寻找基准元素的节点
let partion = (begin, end) => {
  let val = begin.val
  // 4 5 3 2 1
  //       p q
  let p = begin
  let q = begin.next
  while (q !== end) {
    if (q.val < val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  // 让基准元素跑到中间去
  swap(p, begin)
  return p
}

export default function sort (begin, end) {
  if (begin !== end) {
    let part = partion(begin, end)
    sort(begin, part)
    sort(part.next, end)
  }
}

export {
  Node,
  NodeList
}
// 方法2 归并排序

const sortList = function (head) {
  if (!head || !head.next) {
    return head
  }
  // 使用快慢指针
  //奇数   4 5 3 2 1
  //慢     ^ ^ ^
  //快       ^   ^   null
  //结论: 奇数长度的 慢指针指向中点 快指针指向null
  //偶数  4 5 3 2 1 6
  //慢    ^ ^ ^
  //快      ^   ^   ^
  // 结论 慢指针指向 1/2 长度 快指针指向最后一个
  let [slow, fast] = [head, head.next]
  while (fast && fast.next) {
    fast = fast.next.next // 一次移动两格
    slow = slow.next
  }
  // 切割为两个链表
  let center = slow.next
  slow.next = null
  let left = sortList(head)
  let right = sortList(center)
  const h = new Node(0)
  const res = h
  // 合并
  while (left && right) {
    if (left.val < right.val) {
      h.next = left
      left = left.next
    } else {
      h.next = right
      right = right.next
    }
    h = h.next
  }
  h.next = left != null ? left : right
  return res.next
}

