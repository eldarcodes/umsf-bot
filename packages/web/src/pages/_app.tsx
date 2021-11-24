import type { AppProps } from "next/app";
import { init_i18n } from "../lib/i18n";
import { isServer } from "../lib/isServer";
import { GlobalStyle, theme } from "@bot/ui/styles";
import { QueryClient, QueryClientProvider } from "react-query";

import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";
import { useTranslation } from "react-i18next";
import { ConfigProvider } from "antd";

import antdUk from "antd/lib/locale/uk_UA";
import antdRu from "antd/lib/locale/ru_RU";

if (!isServer) {
  init_i18n();
}

const queryClient = new QueryClient({
  defaultOptions: {},
});

function BotApp({ Component, pageProps }: AppProps) {
  const { i18n } = useTranslation();

  const antdLocale = {
    uk: antdUk,
    ru: antdRu,
  };

  const currentLocale = i18n.language as "uk" | "ru";

  return (
    <ConfigProvider locale={antdLocale[currentLocale]}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </ConfigProvider>
  );
}

export default BotApp;
