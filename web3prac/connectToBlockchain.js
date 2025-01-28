const {Web3} = require("web3")

async function connectToBlockchain(){
  const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
  const web3 = new Web3(provider)
  //console.log(web3)
  const accounts = await web3.eth.getAccounts()
  //console.log(accounts)
  const balances = await web3.eth.getBalance(accounts[1])
  //console.log(balances)
  const balanceInEth = await web3.utils.fromWei(balances, "ether")
  console.log(balanceInEth)
}

connectToBlockchain()
