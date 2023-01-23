const { ethers } = require("hardhat");
const { expect } = require("chai");
const chai = require("chai");
const BN = require("bn.js");

// Enable and inject BN dependency
chai.use(require("chai-bn")(BN));

describe("demo test", function () {
  it("data > 0", async function () {
    const DataFeed = await ethers.getContractFactory("DataFeedDemo");
    const DataFeedContract = await DataFeed.deploy();
    await DataFeedContract.deployed();
    console.log("deployed successfully");

    const result = await DataFeedContract.getPrice();
    const resultStr = new ethers.BigNumber.from(result._hex).toString();
    console.log("price is : " + resultStr);

    expect(resultStr).to.be.bignumber.greaterThan("0");
  });
});
