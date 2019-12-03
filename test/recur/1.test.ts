import restoreIpAddresses from '../../code/recur/1'

test('ip 地址问题', () => {
  expect(restoreIpAddresses( '25525511135')).toEqual(["255.255.11.135", "255.255.111.35"])
  expect(restoreIpAddresses('010010')).toEqual(["0.10.0.10","0.100.1.0"])
})
