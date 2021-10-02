import { NextPage } from "next";
import { useQuery } from "react-query";
import { getUser } from "../api/user";
import Layout from "@bot/web/src/components/Layout";

const Dashboard: NextPage = () => {
  const { data, isLoading, isError } = useQuery("user", getUser);

  return (
    <Layout title="Dashboard" loading={isLoading} error={isError}>
      {JSON.stringify(data)}
    </Layout>
  );
};

export default Dashboard;
