import { login } from "../../api";
import { useQuery } from "react-query";
import BotLayout from "@bot/web/src/components/Layout";

const AuthPage: React.FC = () => {
  const { data, isLoading, isError } = useQuery("auth", login);

  return <BotLayout isError={isError} loading={isLoading} />;
};

export default AuthPage;
