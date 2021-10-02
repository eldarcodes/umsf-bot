import type { AppProps } from "next/app";
import { init_i18n } from "../lib/i18n";
import { isServer } from "../lib/isServer";
import { GlobalStyle } from "@bot/ui";
import { QueryClient, QueryClientProvider } from "react-query";

import "antd/dist/antd.css";

if (!isServer) {
  init_i18n();
}

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
