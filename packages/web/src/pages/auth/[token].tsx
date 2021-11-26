import { useQuery, useQueryClient } from "react-query";
import BotLayout from "@bot/web/src/components/Layout";
import { useRouter } from "next/router";
import { get } from "lodash";
import Api from "../../api/instance";

const AuthPage: React.FC = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const token = router.query.token;

  const { status, isLoading, isError } = useQuery(["auth", token], async () => {
    if (!token) {
      throw new Error("Empty token.");
    }

    const response = await Api.post("auth/login", { id: token });
    const data = get(response, "data.data", null);

    if (!data) {
      throw new Error("Something went wrong.");
    }

    const userToken = get(data, "token", null);
    localStorage.setItem("token", userToken);

    queryClient.invalidateQueries("user");

    return data;
  });

  if (status === "success") {
    router.push("/dashboard");
  }

  return <BotLayout isError={isError} loading={isLoading} />;
};

export default AuthPage;
