import axios from "axios";
import { apiBaseUrl } from "../lib/constants";
import { isServer } from "../lib/isServer";

const instance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 1000,
  headers: {
    authorization:
      (!isServer && `Bearer ${localStorage.getItem("token")}`) || "",
  },
});

export default instance;
