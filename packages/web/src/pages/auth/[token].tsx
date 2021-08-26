import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { get } from "lodash";
import { Spin } from "@bot/ui";

const AuthPage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const token = router.query.token;

  const login = async () => {
    setLoading(true);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/auth/login`,
      {
        method: "POST",
        body: JSON.stringify({
          id: token,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    setLoading(false);
    const userToken = get(json, "data.token", "");

    localStorage.setItem("token", userToken);
    router.push("/home");
  };

  useEffect(() => {
    if (token) {
      login();
    }
  }, [token]);

  if (loading) {
    return <Spin />;
  }

  return null;
};

export default AuthPage;
