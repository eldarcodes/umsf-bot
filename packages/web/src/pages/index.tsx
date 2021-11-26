import { Alert } from "@bot/ui";
import { useTypeSafeTranslation } from "../hooks/useTypeSafeTranslation";
import Layout from "@bot/web/src/components/Layout";

const Home: React.FC = () => {
  const { t } = useTypeSafeTranslation();

  return (
    <Layout title="Home">
      <Alert message={t("umsf")} type="info" showIcon />
    </Layout>
  );
};

export default Home;
