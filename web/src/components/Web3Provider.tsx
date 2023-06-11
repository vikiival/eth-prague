import { useTheme } from 'next-themes'
import { APP_NAME } from '@/lib/consts'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { publicProvider, } from 'wagmi/providers/public'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { mainnet, goerli } from 'wagmi/chains'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import { taiko, mantle } from '@/chains'

const ALCHEMY_API_KEY = 'XMzdOiwPLUhKZ0OfdoYY2uZ4c64qZyaG'


const { chains } = configureChains(
	[goerli],
	[alchemyProvider({ apiKey: ALCHEMY_API_KEY }), publicProvider()],
  )
const client = createClient(
	getDefaultClient({
		appName: APP_NAME,
		autoConnect: true,
		chains,
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
