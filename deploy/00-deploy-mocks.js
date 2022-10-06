const { network } = require("hardhat")
const {
    DECIMALS,
    developmentChains,
    INITIAL_PRICE,
} = require("../helper-hardhat-config")
//const DECIMALS = "8"
//const INITIAL_PRICE = "200000000000"
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    console.log(deployer + "     hulalala")

    if (developmentChains.includes(network.name)) {
        log("Local Network Detected! Deploying mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_PRICE],
        })
        log("Mocks Deployed!")
        log("----------------------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
