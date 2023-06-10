import { Chain } from 'wagmi'


export const mantle: Chain = {
    id: 5000,
    name: 'Mantle',
    network: 'mantle',
    nativeCurrency: {
      decimals: 18,
      name: 'Mantle',
      symbol: 'MNT',
    },
    rpcUrls: {
      public: 'https://mantle.rpc.thirdweb.com',
      default: 'https://mantle.rpc.thirdweb.com',
    },
    blockExplorers: {
      etherscan: { name: 'Mantle Explorer', url: 'https://explorer.mantle.xyz' },
      default: { name: 'Mantle Explorer', url: 'https://explorer.mantle.xyz' },
    },
  }

  export const taiko: Chain = {
    id: 167005,
    name: 'Taiko',
    network: 'taiko',
    nativeCurrency: {
      decimals: 18,
      name: 'Taiko',
      symbol: 'ETH',
    },
    rpcUrls: {
      public: 'https://rpc.test.taiko.xyz',
      default: 'https://rpc.test.taiko.xyz',
      alchemy: 'https://rpc.test.taiko.xyz'
    },
    blockExplorers: {
      etherscan: { name: 'Taiko Explorer', url: 'https://explorer.test.taiko.xyz' },
      default: { name: 'Taiko Explorer', url: 'https://explorer.test.taiko.xyz' },
    },
    testnet: true,
  }
  