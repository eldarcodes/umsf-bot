import { NextPage } from "next";
import Head from "next/head";
import { MyButton } from "@bot/ui";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>UMSF Bot</title>
      </Head>
      <MyButton type="primary">HI</MyButton>
    </>
  );
};

export default Home;
