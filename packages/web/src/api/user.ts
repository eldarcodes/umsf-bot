import Api from ".";

export const getUser = async () => {
  const response = await Api.get("user");
  if (!response.data) {
    throw new Error("Something went wrong.");
  }

  return response.data;
};
