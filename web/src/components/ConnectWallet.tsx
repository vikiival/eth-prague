import styled from "styled-components";
import { FC } from 'react'
import { useAccount } from 'wagmi'
import { ConnectKitButton } from 'connectkit'

const StyledButton = styled.button`
padding: 0.5rem 1rem;
background-color: #16392D;
font-family: 'Roboto', sans-serif;
color: white;
border-radius: 50px;
`;

type Visibility = 'always' | 'connected' | 'not_connected'

const ConnectWallet: FC<{ show?: Visibility }> = ({ show = 'always' }) => {
	const { isConnected } = useAccount()

	if ((show == 'connected' && !isConnected) || (show == 'not_connected' && isConnected)) return null

	return (
		<ConnectKitButton.Custom>
		  {({ isConnected, show, truncatedAddress, ensName }) => {
			return (
			  <StyledButton onClick={show}>
				{isConnected ? ensName ?? truncatedAddress : "Connect Wallet"}
			  </StyledButton>
			);
		  }}
		</ConnectKitButton.Custom>
	  );
}


export default ConnectWallet
