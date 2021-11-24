import { NextPage } from "next";
import { Alert, DatePicker } from "@bot/ui";
import { useTypeSafeTranslation } from "../hooks/useTypeSafeTranslation";
import Layout from "@bot/web/src/components/Layout";

const Home: NextPage = () => {
  const { t } = useTypeSafeTranslation();

  return (
    <Layout title="Home">
      <Alert message={t("umsf")} type="info" showIcon />
      <DatePicker />
    </Layout>
  );
};

export default Home;
