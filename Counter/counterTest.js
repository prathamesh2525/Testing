const { expect, assert } = require("chai");
const { BigNumber } = require("bignumber.js");

describe("Counter contract", async function () {
  let data;

  beforeEach(async () => {
    const Counter = await ethers.getContractFactory("Counter"); //Instance of the contract
    const counter = await Counter.deploy(10); // Deployed smart contract
    await counter.deployed();
    data = counter;
  });
  it("Deployment should assign the specified value to the count variable", async function () {
    const [count] = await ethers.getSigners();

    console.log(`Signer Object ${count}`);

    expect(await data.getCounter()).to.equal(await data.count());
  });

  it("should return the incremented count value", async function () {
    await data.increment(6);
    expect(await data.getCounter()).to.equal(16);
  });

  it("should return decremented, multiplied and divided count value", async function () {
    await data.decrement(6);
    expect().to.equal(10);
    // await data.divide(2);
    // expect(await data.getCounter()).to.equal(5);
    // await data.multiply(4);
    // expect(await data.getCounter()).to.equal(20);
  });
});
