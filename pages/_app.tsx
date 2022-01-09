import { AppProps } from "next/app";
import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#000" options={{ showSpinnner: false }} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
