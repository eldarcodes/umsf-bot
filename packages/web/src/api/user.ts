import Api from ".";

export const getUser = async () => {
  const response = await Api.get("user", {
    headers: {
      authorization: `Bearer ${localStorage.getItem("token") || ""}`,
    },
  });
  if (!response.data) {
    throw new Error("Something went wrong.");
  }

  return response.data;
};
