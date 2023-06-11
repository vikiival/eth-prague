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
	id: 11155111,
	name: 'Taiko',
	network: 'Sepolia',
	nativeCurrency: {
		decimals: 18,
		name: 'Taiko',
		symbol: 'ETH',
	},
	rpcUrls: {
		public: 'https://rpc.sepolia.org',
		default: 'https://rpc.sepolia.org',
	},
	blockExplorers: {
		etherscan: { name: 'Taiko Explorer', url: 'https://sepolia.etherscan.io/' },
		default: { name: 'Taiko Explorer', url: 'https://sepolia.etherscan.io/' },
	},
  multicall: {
    address: '0x6b0D01Ad3c69009b43E1EAD17b0A3F809C0Dda75',
    // include blockCreated if needed
    blockCreated: undefined
}
}
