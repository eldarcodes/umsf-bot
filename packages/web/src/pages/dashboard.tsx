import { NextPage } from "next";
import { useQuery } from "react-query";
import { Descriptions } from "@bot/ui";
import { getUser } from "@bot/web/src/api";
import Layout from "@bot/web/src/components/Layout";
import { get } from "lodash";
import Time from "@bot/web/src/components/Time";

const Dashboard: NextPage = () => {
  const { data, isLoading, isError } = useQuery("user", getUser);

  const roleId = get(data, "role_id", null);
  const firstName = get(data, "first_name", null);
  const lastName = get(data, "last_name", null);
  const language = get(data, "language_code", null);
  const createdAt = get(data, "created_at", null);
  const updatedAt = get(data, "updated_at", null);

  const dataSource = [
    {
      label: "First name",
      value: firstName,
    },
    {
      label: "Last name",
      value: lastName,
    },
    {
      label: "Role ID",
      value: roleId,
    },
    {
      label: "Language",
      value: language,
    },
    {
      label: "Created at",
      value: <Time utc={createdAt} />,
    },
    {
      label: "Updated at",
      value: <Time utc={updatedAt} />,
    },
  ];

  return (
    <Layout title="Dashboard" loading={isLoading} error={isError}>
      <Descriptions title="User info" column={1} bordered>
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
