import axios from "axios";
import config from "./config/config";
axios.defaults.baseURL = config.apiUrl;
export const createShortUrl = obj => {
  const requestUrl = "item";
  return axios.post(requestUrl, obj);
};
