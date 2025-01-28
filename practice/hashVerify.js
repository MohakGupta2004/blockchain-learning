const crypto = require("crypto")

function verifyHash(hash, input, nonce){
    const newHash = crypto.createHash("sha256").update(input+nonce).digest("hex")

    if(hash == newHash){
      return true;
    }
    else {
      return false;
    }
}


console.log(verifyHash("00002eb510bdb2564e0508ba5ab7e3c7e9c33a67afab0b17908cc90397b973a0", `
    User1 => User2 money: 200 bitcoin
`, 27056));
