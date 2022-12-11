const {
  Contract,
} = require('hardhat/internal/hardhat-network/stack-traces/model');

require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.17',
  networks: {
    goerli: {
      url: 'YOUR_ALCHEMY_API_URL_HERE',
      accounts: ['YOUR_ACCOUNT_PRIVATE_KEY_HERE'],
    },
  },
};
