import { NextPage } from "next";
import { useTypeSafeTranslation } from "../hooks/useTypeSafeTranslation";
import { Alert } from "@bot/ui";

const Home: NextPage = () => {
  const { t } = useTypeSafeTranslation();

  return (
    <div style={{ padding: 30 }}>
      <Alert message={t("umsf")} type="info" showIcon />
    </div>
  );
};

export default Home;
