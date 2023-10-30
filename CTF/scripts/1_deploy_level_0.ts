import { ethers } from "hardhat";
async function main() {
  const Level0Factory = await ethers.getContractFactory("Level_0");
  const Level0 = await Level0Factory.deploy();
  await Level0.waitForDeployment();
  console.log("DEX Factory deployed at Address: ", await Level0.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
