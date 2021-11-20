import { NextPage } from "next";
import { Alert, Space } from "@bot/ui";
import { useTypeSafeTranslation } from "../hooks/useTypeSafeTranslation";
import Layout from "@bot/web/src/components/Layout";

const Home: NextPage = () => {
  const { t } = useTypeSafeTranslation();

  return (
    <Layout title="Home">
      <Space style={{ padding: 30 }}>
        <Alert message={t("umsf")} type="info" showIcon />
      </Space>
    </Layout>
  );
};

export default Home;
