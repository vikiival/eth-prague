import { useTheme } from 'next-themes'
import { APP_NAME } from '@/lib/consts'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { mainnet, goerli } from 'wagmi/chains'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'


const { chains } = configureChains(
	[mainnet, goerli],
	[publicProvider()],
  )
const client = createClient(
	getDefaultClient({
		appName: APP_NAME,
		autoConnect: true,
		infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
		chains
	})
)

const Web3Provider = ({ children }) => {
	const { resolvedTheme } = useTheme()

	return (
		<WagmiConfig client={client}>
			<ConnectKitProvider mode={resolvedTheme as 'light' | 'dark'}>{children}</ConnectKitProvider>
		</WagmiConfig>
	)
}

export default Web3Provider
