import Api from "./instance";

export const getUser = async () => {
  const { data } = await Api.get("user");

  if (!data) {
    throw new Error("Something went wrong.");
  }

  return data;
};
