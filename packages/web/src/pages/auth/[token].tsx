import { useEffect, useState } from "react";
import { Loader } from "@bot/ui";
import { login as fetchLogin } from "../../api";
import { get } from "lodash";
import { useRouter } from "next/router";

const AuthPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const token = router.query.token;

  const login = async () => {
    setLoading(true);
    try {
      const response = await fetchLogin(token);

      const userToken = get(response, "data.token", null);

      localStorage.setItem("token", userToken);
      router.push("/dashboard");
    } catch (e) {}
    setLoading(false);
  };

  useEffect(() => {
    if (token) {
      login();
    }
  }, [token]);

  if (loading) {
    return <Loader height="600px" size="large" />;
  }

  return null;
};

export default AuthPage;
