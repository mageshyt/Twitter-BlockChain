require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.2',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/8IvjDg_hm2uEuLzsGTIlBdFzLa2xdQbv',
      accounts: [
        'c3952be5291af9ef543bb4a65dcd61cc7ae31782a345879e08dbf1d6d19a8319',
      ],
    },
  },
}
