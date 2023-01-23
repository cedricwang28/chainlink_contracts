const { ethers } = require("hardhat");

async function deployDataFeed() {
  const DataFeed = await ethers.getContractFactory("DataFeedDemo");
  const DataFeedContract = await DataFeed.deploy();
  await DataFeedContract.deployed();
  console.log("deployed successfully");

  const contractAddress = DataFeedContract.address;
  console.log("address is : " + contractAddress);
}

deployDataFeed()
  .then((r) => console.log(r))
  .catch((e) => console.log(e));
