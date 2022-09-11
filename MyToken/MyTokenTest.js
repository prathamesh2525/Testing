const { expect } = require("chai");

describe("MyToken", function () {
  it("should return correct name and symbol", async function () {
    const MyToken = await hre.ethers.getContractFactory("MyToken");

    const myContractDeployed = await MyToken.deploy("MyToken", "CMT");
    await myContractDeployed.deployed();

    expect(await myContractDeployed.name()).to.equal("MyToken");
    expect(await myContractDeployed.symbol()).to.equal("CMT");
  });
});
