
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Xf90aTFEPx8A0aCnoToaFmAv4_ZLv9lx',
      accounts: ['1c2a64235a9109926c5d72d570dd783fba2a260670181afe8236c324dc2596cf'],
    },
  },
};