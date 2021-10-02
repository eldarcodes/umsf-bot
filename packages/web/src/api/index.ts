import axios from "axios";
import { getUser } from "./user";
import { login } from "./login";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
});

export { getUser, login };

export default instance;
