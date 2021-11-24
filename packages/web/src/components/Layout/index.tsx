import React, { useState } from "react";
import { Layout, Loader } from "@bot/ui";
import { ContentWrapper } from "@bot/ui/styles";
import Head from "next/head";

import BotError from "../Error";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";
import { useTypeSafeTranslation } from "../../hooks/useTypeSafeTranslation";

const { Content } = Layout;

interface LayoutProps {
  loading?: boolean;
  error?: boolean;
  title?: string;
}

const BotLayout: React.FC<LayoutProps> = ({
  title: pageTitle,
  children,
  loading,
  error,
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const { t, i18n } = useTypeSafeTranslation();

  const defaultTitle = t("project_title");

  let _title = "";
  if (!i18n.isInitialized) {
    _title = "Loading...";
  } else if (pageTitle) {
    _title = `${pageTitle} - ${defaultTitle}`;
  } else {
    _title = defaultTitle;
  }

  let body = null;

  if (loading) {
    body = <Loader height={500} size="large" />;
  } else if (error) {
    body = <BotError message={t("errors.default")} />;
  } else {
    body = children;
  }

  const handleSidebar = () => {
    setCollapsed(prev => !prev);
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>{_title}</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no, user-scalable=0"
        />
      </Head>

      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar collapsed={collapsed} />
        <Layout>
          <Header collapsed={collapsed} onClick={handleSidebar} />
          <Content style={{ margin: "0 16px" }}>
            <ContentWrapper>{body}</ContentWrapper>
          </Content>
          <Footer />
        </Layout>
      </Layout>
    </>
  );
};

export default BotLayout;
