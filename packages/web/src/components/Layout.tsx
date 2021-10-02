import React from "react";
import { Loader } from "@bot/ui";
import { NavBar } from "../components/NavBar";
import { ContentWrapper, Layout as LayoutUI } from "@bot/ui";
import Head from "next/head";
import MyError from "./Error";

interface LayoutProps {
  loading?: boolean;
  error?: boolean;
  title?: string;
}

const Layout: React.FC<LayoutProps> = ({ title, children, loading, error }) => {
  const defaultTitle = "UMSF Bot";
  const nextTitle = title ? `${defaultTitle} | ${title}` : defaultTitle;

  let body = null;

  if (loading) {
    body = <Loader height="300px" size="large" />;
  } else if (error) {
    body = <MyError message="Something went wrong!" />;
  } else {
    body = children;
  }

  return (
    <LayoutUI>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />
        <title>{nextTitle}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
      </Head>

      <NavBar />

      <ContentWrapper>{body}</ContentWrapper>
    </LayoutUI>
  );
};

export default Layout;
