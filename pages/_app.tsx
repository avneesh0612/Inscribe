import { AppProps } from "next/app";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { NextSeo } from "next-seo";

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
      <NextSeo
        title="Inscribe"
        titleTemplate="Inscribe"
        defaultTitle="Inscribe"
        description="A DAO for bloggers all around the world!"
        canonical="https://inscribe.vercel.app/"
        openGraph={{
          url: "https://inscribe.vercel.app/",
          title: "Inscribe",
          description: "A DAO for bloggers all around the world!",
          images: [
            // Add image TODO
          ],
          profile: {
            firstName: "Avneesh",
            gender: "Male",
            lastName: "Agarwal",
            username: "avneesh0612",
          },
        }}
        twitter={{
          handle: "@avneesh0612",
          site: "@avneesh0612",
          cardType: "summary_large_image",
        }}
      />
      <NextNProgress color="#6D58F5" />
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
