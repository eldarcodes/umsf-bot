import { NextPage } from "next";
import Head from "next/head";
import { Button } from "@bot/ui";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UMSF Bot</title>
      </Head>
      <Button label="label" />
    </div>
  );
};

export default Home;
