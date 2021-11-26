import { isServer } from "../lib/isServer";

const getToken = () => {
  if (isServer) return "";

  return `Bearer ${localStorage.getItem("token") || ""}`;
};
export default getToken;
