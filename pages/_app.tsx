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
        canonical="http://inscribedao.me/"
        openGraph={{
          url: "http://inscribedao.me/",
          title: "Inscribe",
          description: "A DAO for bloggers all around the world!",
          images: [
            {
              url: "https://www.inscribedao.me/og-image.png",
              width: 800,
              height: 420,
              alt: "Inscribe",
            },
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
      <NextNProgress color="#6D58F5" options={{ showSpinner: false }} />
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
