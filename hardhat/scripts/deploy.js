const hre = require("hardhat");

async function main() {
  // Get the contract factory
  const Demo = await hre.ethers.getContractFactory("Demo");

  // Deploy the contract
  const demo = await Demo.deploy();

  await demo.waitForDeployment()

  // Log the contract address
  console.log("Demo deployed to:", await demo.getAddress());
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
