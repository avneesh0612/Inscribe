import { AppProps } from "next/app";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

const supportedChainIds = [4];

const connectors = {
  injected: {},
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <NextNProgress color="#000" options={{ showSpinnner: false }} />
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
