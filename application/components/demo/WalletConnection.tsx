import {
  ConnectWallet,
  ThirdwebProvider,
  coinbaseWallet,
  localWallet,
  magicLink,
  metamaskWallet,
  safeWallet,
  smartWallet,
  walletConnect,
} from "@thirdweb-dev/react";
import React, { useState } from "react";

type Props = {};

const options = {
  "Browser Wallets": [metamaskWallet(), coinbaseWallet(), walletConnect()],
  "Safe Wallets": [safeWallet()],
  "Smart Wallets (ERC4337)": [
    smartWallet({
      gasless: true,
      thirdwebApiKey: process.env.NEXT_PUBLIC_THIRDWEB_API_KEY as string,
      factoryAddress: process.env
        .NEXT_PUBLIC_THIRDWEB_FACTORY_ADDRESS as string,
    }),
  ],
  "Local Wallets": [localWallet()],
  "Email Wallets": [
    magicLink({
      apiKey: process.env.NEXT_PUBLIC_MAGIC_LINK_API_KEY as string,
    }),
  ],
};

export default function WalletConnection({}: Props) {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    "Browser Wallets",
  ]);

  return (
    <div className="mb-4 flex flex-col items-start flex-wrap">
      <ThirdwebProvider
        supportedWallets={
          selectedOptions.length === 0
            ? options["Browser Wallets"]
            : [
                // For each selected option, spread the array of wallets into the supportedWallets array
                ...selectedOptions
                  .map((option) => options[option as keyof typeof options])
                  .flat(),
              ]
        }
      >
        <ConnectWallet />
      </ThirdwebProvider>
    </div>
  );
}
