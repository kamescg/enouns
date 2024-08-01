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

import { AppConfig } from "@/utils/AppConfig";
import IsMounted from "@/components/IsMounted";
import { env } from "process";

const { chains, provider, webSocketProvider } = configureChains(
  [
    chain.mainnet,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === "true"
      ? [chain.mainnet]
      : []),
  ],
  [
    alchemyProvider({ alchemyId: env.ALCHEMY_API_KEY }),
    publicProvider(),
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
