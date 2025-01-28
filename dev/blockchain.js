const {GENESIS_DATA}= require("./config")
const crypto = require('crypto')
class Block{
  constructor({hash, prevHash, data, timestamp}){
    this.hash = hash;
    this.prevHash = prevHash
    this.data = data
    this.timestamp = timestamp
  }

  static genesis(){
    return new this(GENESIS_DATA)
  }
  
  mine(){

  }
}

const block1 = Block.genesis()

console.log(block1)
