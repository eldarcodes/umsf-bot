import getToken from "../helpers/getToken";
import Api from "./instance";

export const getUser = async () => {
  const token = getToken();

  const { data } = await Api.get("user", {
    headers: {
      authorization: token,
    },
  });

  if (!data) {
    throw new Error("Something went wrong.");
  }

  return data;
};
