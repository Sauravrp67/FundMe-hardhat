const networkConfig = {
    5: {
        name: "georli",
        ethUsdPriceFeed: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    31337: {
        name: "localhost",
    },
}
const developmentChains = ["hardhat", "localhost"]
const DECIMALS = "8"
const INITIAL_PRICE = "200000000000"

module.exports = {
    developmentChains,
    networkConfig,
    DECIMALS,
    INITIAL_PRICE,
}
