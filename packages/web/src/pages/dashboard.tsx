import { NextPage } from "next";
import { useQuery } from "react-query";
import { Descriptions } from "@bot/ui";
import { getUser } from "@bot/web/src/api";
import Layout from "@bot/web/src/components/Layout";
import { get } from "lodash";
import Time from "@bot/web/src/components/Time";
import { useTypeSafeTranslation } from "../hooks/useTypeSafeTranslation";

const Dashboard: NextPage = () => {
  // const { data, isLoading, isError } = useQuery("user", getUser);
  const { data, isLoading, isError } = {
    data: {},
    isLoading: false,
    isError: false,
  };

  const { t } = useTypeSafeTranslation();

  const roleId = get(data, "role_id", null);
  const firstName = get(data, "first_name", null);
  const lastName = get(data, "last_name", null);
  const language = get(data, "language_code", null);
  const createdAt = get(data, "created_at", null);
  const updatedAt = get(data, "updated_at", null);

  const dataSource = [
    {
      label: t("user_info.first_name"),
      value: firstName,
    },
    {
      label: t("user_info.last_name"),
      value: lastName,
    },
    {
      label: t("user_info.role_id"),
      value: roleId,
    },
    {
      label: t("language"),
      value: language,
    },
    {
      label: t("created_at"),
      value: <Time utc={createdAt} />,
    },
    {
      label: t("updated_at"),
      value: <Time utc={updatedAt} />,
    },
  ];

  return (
    <Layout title="Dashboard" loading={isLoading} error={isError}>
      <Descriptions title={t("user_info.title")} column={1} bordered>
        {dataSource.map(({ label, value }, index) => (
          <Descriptions.Item label={label} key={index}>
            {value}
          </Descriptions.Item>
        ))}
      </Descriptions>
    </Layout>
  );
};

export default Dashboard;
