import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import { init_i18n } from "../lib/i18n";
import { isServer } from "../lib/isServer";
import { ContentWrapper, GlobalStyle, Layout, Menu, theme } from "@bot/ui";
import { ThemeProvider } from "styled-components";

import "antd/dist/antd.css";

if (!isServer) {
  init_i18n();
}

const { Header, Footer } = Layout;

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
      <GlobalStyle />

      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal" selectedKeys={["title"]}>
            <Menu.Item key="title">
              <Link href="/">UMSF Bot</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <ContentWrapper>
          <Component {...pageProps} />
        </ContentWrapper>
      </Layout>
    </>
  );
}

export default MyApp;
