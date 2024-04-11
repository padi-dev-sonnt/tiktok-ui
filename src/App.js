import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from '~/layouts';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

import { config } from './wagmi/wagmi';
import { createWeb3Modal } from '@web3modal/wagmi/react'

const queryClient = new QueryClient();
const projectId = '3fbb6bba6f1de962d911bb5b5c9dba88';
createWeb3Modal({
    wagmiConfig: config,
    projectId: projectId,
    allWallets: 'ONLY_MOBILE'
})

function App() {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <div className="App">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                let Layout = DefaultLayout;
                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }

                                const Page = route.component;
                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </Router>
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export default App;
