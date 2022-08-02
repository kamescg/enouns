import "../styles/global.css";
import "@rainbow-me/rainbowkit/styles.css";
import { ModalProvider } from "react-modal-hook";
import {
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
  wallet,
} from "@rainbow-me/rainbowkit";
import type { AppProps } from "next/app";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

import { AppConfig } from "@/utils/AppConfig";
import IsMounted from "@/components/IsMounted";

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    chain.polygon,
    chain.optimism,
    chain.arbitrum,
    chain.hardhat,
    chain.rinkeby,
    chain.kovan,
    chain.goerli,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [chain.goerli, chain.kovan, chain.rinkeby, chain.ropsten]
      : []),
  ],
  [
    jsonRpcProvider({
      priority: 0,
      rpc: () => ({
        http: "http://127.0.0.1:8545",
      }),
    }),
    // alchemyProvider({ alchemyId: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC" }),
    // publicProvider(),
  ]
);

const { wallets } = getDefaultWallets({
  appName: AppConfig.title,
  chains,
});

const demoAppInfo = {
  appName: AppConfig.title,
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: "Other",
    wallets: [
      wallet.argent({ chains }),
      wallet.trust({ chains }),
      wallet.ledger({ chains }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider appInfo={demoAppInfo} chains={chains}>
        <IsMounted>
          <ModalProvider>
            <Component {...pageProps} />
          </ModalProvider>
        </IsMounted>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
