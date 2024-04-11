import { http, createConfig } from 'wagmi';
import { base, mainnet, optimism, sepolia } from 'wagmi/chains';
import { injected, metaMask, safe, walletConnect, coinbaseWallet } from 'wagmi/connectors';
import { createWeb3Modal } from '@web3modal/wagmi/react'

const projectId = '3fbb6bba6f1de962d911bb5b5c9dba88';


// export const config = createConfig({
//     chains: [mainnet, optimism, base],
//     connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
//     transports: {
//         [mainnet.id]: http(),
//         [optimism.id]: http(),
//         [base.id]: http(),
//     },
// });

const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'http://localhost:3000/', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }

export const config = createConfig({
    chains: [mainnet, optimism, base],
    connectors: [injected(), walletConnect({ projectId }), metaMask(), safe()],
    transports: {
        [mainnet.id]: http(),
        [optimism.id]: http(),
        [base.id]: http(),
    },
});
