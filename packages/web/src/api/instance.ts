import axios from "axios";
import getToken from "../helpers/getToken";
import { apiBaseUrl } from "../lib/constants";

const instance = axios.create({
  baseURL: apiBaseUrl,
  timeout: 1000,
  headers: {
    authorization: getToken(),
  },
});

export default instance;
