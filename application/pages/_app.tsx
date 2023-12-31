import { ThirdwebProvider } from "@thirdweb-dev/react";
import { CHAIN } from "../const/chains";
import { Nav } from "../components/Navbar";
import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "@/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>EVM Kit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThirdwebProvider
          // Set active chain for app
          activeChain={CHAIN}
          // Auth (SIWE) configuration
          authConfig={{
            domain: process.env.NEXT_PUBLIC_AUTH_DOMAIN || "evmkit.com", // Your website domain
            authUrl: "/api/auth", // API Route (default is - pages/api/auth/[...thirdweb].ts)
          }}
        >
          <Nav />
          <Component {...pageProps} />
          <Footer />
        </ThirdwebProvider>
      </main>
    </div>
  );
}

export default MyApp;
