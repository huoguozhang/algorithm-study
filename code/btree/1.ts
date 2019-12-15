// 101. 对称二叉树 https://leetcode-cn.com/problems/symmetric-tree/
// 构造树结构
class Node {
  constructor (val) {
    this.val = val
    this.left = null
    this.right = null
  }
}

class Tree {
  constructor (data) {
    // 存储所有的节点
    let nodeList = [new Node(data[0])]

    for (let i = 1, len = data.length ; i < len ; i++) {
      let node = new Node(data[i])
      nodeList.push(node)
      // 算层数
      let n = Math.floor(Math.sqrt(i + 1))
      // 算 当前行的开始点 索引
      let currentRowStartIndex = Math.pow(2, n) - 1
      // 上一层的开始点的索引
      let prevRowStartIndex = Math.pow(2, n - 1) - 1
      // 父节点索引
     let parent = nodeList[prevRowStartIndex + Math.floor((i - currentRowStartIndex) / 2)];
      console.log('parent', parent)
      // 判断是左节点还是右节点
      if ((i - currentRowStartIndex) % 2 === 0) {
        parent.left = node
      } else{
        parent.right = node
      }


    }

    let root = nodeList.shift()
    nodeList.length = 0
    return root
  }
}
// 判断是否对称
const isSymmetric = function(root) {
  if (!root) {
    return true
  }

  const walk = (left, right) => {
    if (!left && !right) {
      return true
    }
    if ((!left && right) || (left && !right) || left.val !== right.val) {
      return false
    } else {
      return walk(left.left, right.right) && walk(left.right, right.left)
    }
  }

  return walk(root.left, root.right)
};
