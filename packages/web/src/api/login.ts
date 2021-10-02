import Api from ".";

export const login = async (id: any) => {
  const response = await Api.post("auth/login", { id });

  if (!response.data) {
    throw new Error("Something went wrong.");
  }

  return response.data;
};
