import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 1000,
  headers: {
    authorization: `Bearer ${localStorage.getItem("token") || ""}`,
  },
});

export default instance;
