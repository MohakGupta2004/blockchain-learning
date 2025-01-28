const crypto = require("crypto")

function findHashAndNonce(input){
  let nonce = 0;
  while(true){
    const hash = crypto.createHash("sha256").update(input+nonce).digest("hex")
    if(hash.substring(0,4)=="0000"){
      return {
        hash: hash,
        nonce: nonce
      }
    }
    nonce++;
  }
}

console.log(findHashAndNonce(`
    User1 => User2 money: 200 bitcoin
`))
