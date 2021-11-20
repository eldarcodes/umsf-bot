import type { AppProps } from "next/app";
import { init_i18n } from "../lib/i18n";
import { isServer } from "../lib/isServer";
import { GlobalStyle, theme } from "@bot/ui/styles";
import { QueryClient, QueryClientProvider } from "react-query";

import "antd/dist/antd.css";
import { ThemeProvider } from "styled-components";

if (!isServer) {
  init_i18n();
}

const queryClient = new QueryClient({
  defaultOptions: {},
});

function BotApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default BotApp;
