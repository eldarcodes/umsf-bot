import { NextPage } from "next";
import { useTypeSafeTranslation } from "../hooks/useTypeSafeTranslation";
import { Alert, Select, Space } from "@bot/ui";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const { i18n } = useTranslation();

  const { t } = useTypeSafeTranslation();

  return (
    <Space style={{ padding: 30 }}>
      <Alert message={t("umsf")} type="info" showIcon />
      <Select
        defaultValue="ru"
        style={{ width: 200 }}
        onChange={value => i18n.changeLanguage(value)}
      >
        <Select.Option value="ru">🇷🇺 Русский</Select.Option>
        <Select.Option value="uk">🇺🇦 Український</Select.Option>
      </Select>
    </Space>
  );
};

export default Home;
