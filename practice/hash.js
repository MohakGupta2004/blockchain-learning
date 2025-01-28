const crypto = require("crypto")

const input = "mohakgupta"
const nonce = 123

const hash = crypto.createHash("sha256").update(input+nonce).digest("hex")
console.log(hash)
