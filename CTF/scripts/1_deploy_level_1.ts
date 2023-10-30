import { ethers } from "hardhat";
async function main() {
  const Level0Factory = await ethers.getContractFactory("Level_1");
  const Level0 = await Level0Factory.deploy();
  await Level0.waitForDeployment();
  console.log("Level1 deployed at Address: ", await Level0.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
