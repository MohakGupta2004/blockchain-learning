const {Web3} = require("web3")

async function sendEth(){
  const provider = new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545")
  const web3 = new Web3(provider)

  const transaction = await web3.eth.sendTransaction({
    from: "0xa79775C75d5e37d8eD6D02ab9bf522b1e8E5b0BA",
    to: "0x6b356D85D7092CB2fF2aD848d72074006E0BA2cb",
    value: web3.utils.toWei("10", "ether")
  })

  console.log(transaction)
}

sendEth()
