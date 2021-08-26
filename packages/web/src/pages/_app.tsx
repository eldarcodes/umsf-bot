import type { AppProps } from "next/app";
import Head from "next/head";
import { init_i18n } from "../lib/i18n";
import { isServer } from "../lib/isServer";

import "antd/dist/antd.css";

if (!isServer) {
  init_i18n();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <title>UMSF Bot</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
