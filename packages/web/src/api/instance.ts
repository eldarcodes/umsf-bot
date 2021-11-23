import axios from "axios";
import { isServer } from "../lib/isServer";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
  headers: {
    authorization:
      (!isServer && `Bearer ${localStorage.getItem("token")}`) || "",
  },
});

export default instance;
