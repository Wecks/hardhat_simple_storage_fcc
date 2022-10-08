const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

describe("SimpleStorage", () => {
  //beforeEach()
  //it()
  //describe("something", () => {})
  let simpleStorageFactory, simpleStorage

  beforeEach(async () => {
    simpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
    simpleStorage = await simpleStorageFactory.deploy()
  })

  it("Should start with a favorite number of 0", async () => {
    const currentValue = await simpleStorage.retrieve()
    const expectedValue = "0"
    assert.equal(currentValue.toString(), expectedValue)
  })
  //it.only("Should update when we call store"... The only word is for running only this test
  it("Should update when we call store", async () => {
    const expectedValue = "7"
    const transactionResponse = await simpleStorage.store(expectedValue)
    transactionResponse.wait(1)
    const updatedValue = await simpleStorage.retrieve()

    assert.equal(expectedValue, updatedValue.toString())
  })
})