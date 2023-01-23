require("@nomicfoundation/hardhat-toolbox");
const ALCHEMY_API_KEY = "xs9LG7S7vjlhybsxoQdejYtQAV2v1pW4";

const GOERLI_PRIVATE_KEY =
  "aeb57e80b2aebe14c25cebeeffe06a03b51adda9782d9b5834f7c124d5042f2d";

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [GOERLI_PRIVATE_KEY],
    },
  },
};
