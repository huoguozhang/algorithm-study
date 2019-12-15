//98. 验证二叉搜索树 https://leetcode-cn.com/problems/validate-binary-search-tree/
// 第一步先构造一个二叉搜索树
// 构造 二叉搜索树

class Node {
  constructor (val) {
    this.val = val
    this.left = this.right = null
  }
}

class BTree {
  constructor (data) {
    let root = new Node(data.shift())
    data.forEach(item => {
      this.insertNode(root, item)
    })
    return root
  }
  insertNode (node, item) {
    if (node.val > item) {
      if (node.left) {
        this.insertNode(node.left, item)
      } else {
        node.left = new Node(item)
      }
    } else {
      if (node.right) {
        this.insertNode(node.right, item)
      } else {
        node.right = new Node(item)
      }
    }
  }

}
 console.log(new BTree([5,1,4,3,2]))
function isValidBST (root) {
  // 根据概念来定义
  // 保存边界 下面的节点也应该祖先组件保持管线
  function walk(root, upper, lower) {
    if (!root) {
      return true
    }
    let val = root.val
    if ((upper && val >= upper) || (lower && val <= lower )) {
      return false
    }
    if ((root.left && root.left.val >= val) || (root.right && root.right.val <= val)) {
      return false
    }
    return walk(root.left, val, lower) && walk(root.right, upper , val)
  }

  return walk(root, null, null)
}
