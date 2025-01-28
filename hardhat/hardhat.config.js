require("@nomicfoundation/hardhat-toolbox");
dotenv.config()
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY 
module.exports = {
  solidity: "0.8.28",
  networks:{
    sepolia:{
      url: SEPOLIA_ADDRESS,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  }
};
