import Api from ".";
import { get } from "lodash";

export const login = async (id: any) => {
  const { data } = await Api.post("auth/login", { id });

  if (!data) {
    throw new Error("Something went wrong.");
  }

  const userToken = get(data, "data.token", null);
  localStorage.setItem("token", userToken);

  return data;
};
