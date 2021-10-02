import axios from "axios";
import { getUser } from "./user";
import { login } from "./login";
import { isBrowser } from "../types/isBrowser";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
  headers: {
    Authorization: isBrowser
      ? `Bearer ${localStorage.getItem("token") || ""}`
      : "",
  },
});

export { getUser, login };

export default instance;
