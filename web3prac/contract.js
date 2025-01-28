// 0x052fbc973afF9b54f022A4C6B9A6cd1cE161f598
const {Web3} = require('web3')
const ABI = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

async function read(){
  const provider = new Web3.providers.HttpProvider("http://127.0.0.1:7545")
  const web3 = new Web3(provider)
  const contractAddr = "0x052fbc973afF9b54f022A4C6B9A6cd1cE161f598";
  const contract = new web3.eth.Contract(ABI, contractAddr)
  await contract.methods.setValue(10).send({
    from: "0x6b356D85D7092CB2fF2aD848d72074006E0BA2cb",
  });
  const newData = await contract.methods.getValue().call()
  console.log(newData)
}

read()
