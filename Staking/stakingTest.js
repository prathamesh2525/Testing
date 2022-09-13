const { expect } = require("chai")
const { ethers } = require("hardhat")
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers")


describe("StakingToken contract", function () {
  async function deployContract() {
    const StakingToken = await ethers.getContractFactory("StakingToken")
    const [owner, address1] = await ethers.getSigners()

    const StakingTokenContract = await StakingToken.deploy(owner.address, 5000)
    await StakingTokenContract.deployed()
    return { StakingToken, StakingTokenContract, owner, address1 }
  }

  it("Should assign the total supply of token to the owner", async function () {
    const { StakingTokenContract, owner } = await loadFixture(deployContract)

    const ownerBalance = await StakingTokenContract.balanceOf(owner.address)
    expect(await StakingTokenContract.totalSupply()).to.equal(ownerBalance)
  })

  it("Owner will transfer 500 tokens to address1 and address1 will stake these tokens", async function () {
    const { StakingTokenContract, owner, address1 } = await loadFixture(
      deployContract
    )

    await StakingTokenContract.transfer(address1, 500)
    expect(await StakingTokenContract.balanceOf(owner.address)).to.equal(
      5000 - 500
    )

    await StakingTokenContract.connect(address1).addStakeholder(
      address1.address
    )
    await StakingTokenContract.connect(address1).createStake(500)

    expect(await StakingTokenContract.stakeOf(address1.address)).to.equal(500)
  })

  it("Stake of fucntionwill return value of address1", async function () {
    const { StakingTokenContract, address1 } = await loadFixture(deployContract)

    await StakingTokenContract.transfer(address1.address, 500)
    await StakingTokenContract.connect(address1).addStakeholder(
      address1.address
    )
    await StakingTokenContract.connect(address1).createStake(500)

    const address1Stake = await StakingTokenContract.stakeOf(address1.address)

    expect(Number(address1Stake)).to.equal(500)
  })

  it("reward fucntion will distribute rewards and stakers can get their by withdraw function", async function () {
    const { StakingTokenContract, address1 } = loadFixture(deployContract)

    await StakingTokenContract.distributeRewards()

    const rewardAddress1 = await StakingTokenContract.rewardOf(address1.address)

    await StakingTokenContract.connect(address1).withdrawReward()

    expect(await StakingTokenContract.balanceOf(address1.address)).to.equal(
      rewardAddress1
    )
  })
})
