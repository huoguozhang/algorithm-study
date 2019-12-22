// https://leetcode-cn.com/problems/lemonade-change/
// 860. 柠檬水找零
// 贪心算法，尽量找零找最大面额

const lemonadeChange = function(bills) {
  const moneyBox = { 5: [], 10: [], 20: [] } // 钱箱

  function changeOneTime (b) {

    if (b === 5) {
      return moneyBox[5].pop()
    } else {
      return moneyBox[10].pop() ? changeOneTime(b - 10) : (moneyBox[5].pop() && changeOneTime(b - 5))
    }

  }

  return bills.every(b => {
    if (b === 5) {
      moneyBox[5].push(b)
      return true
    } else {
      moneyBox[b].push(b)
      return changeOneTime(b - 5)
    }
  })
}

export default lemonadeChange
