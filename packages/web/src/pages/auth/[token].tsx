import { useEffect, useState } from "react";
import { Loader } from "@bot/ui";
import { login as fetchLogin } from "../../api";
import { useRouter } from "next/router";

const AuthPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const token = router.query.token;

  const login = async () => {
    setLoading(true);
    try {
      await fetchLogin(token);
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
