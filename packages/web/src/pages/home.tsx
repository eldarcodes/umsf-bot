import { NextPage } from "next";
import { Spin } from "@bot/ui";
import { useEffect, useState } from "react";
import { get } from "lodash";

const Home: NextPage = () => {
  const [loading, setLoading] = useState(false);

  const getUser = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (loading) {
    return <Spin />;
  }

  return <div>123</div>;
};

export default Home;
