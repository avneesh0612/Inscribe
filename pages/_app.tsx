import { AppProps } from "next/app";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
import { NextSeo } from "next-seo";
import Script from "next/script";

const supportedChainIds = [4];

const connectors = {
  injected: {},
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
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
};

export default MyApp;
