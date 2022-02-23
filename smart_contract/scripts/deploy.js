const hre = require('hardhat')

async function main() {
  const profileImageNftFactory = await hre.ethers.getContractFactory(
    'profileImageNft'
  )
  const profileImageContract = await profileImageNftFactory.deploy()

  await profileImageContract.deployed()

  console.log(
    'Profile image minter contract is deployed to ',
    profileImageContract.address
  )
}
;(async () => {
  try {
    await main()
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
