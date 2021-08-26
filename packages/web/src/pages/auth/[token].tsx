import { NextPageContext } from "next";
import { useRouter } from "next/dist/client/router";

interface IAuthPage {
  data: object;
}

const AuthPage: React.FC<IAuthPage> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div>token: {router.query.token}</div>
      <div>response data: {JSON.stringify(data)}</div>
    </>
  );
};

export async function getServerSideProps({
  query,
}: NextPageContext): Promise<{ props: IAuthPage }> {
  const { token } = query || {};
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${token}`
  );
  const data = await response.json();

  console.log(token, data);

  return { props: { data } };
}

export default AuthPage;
