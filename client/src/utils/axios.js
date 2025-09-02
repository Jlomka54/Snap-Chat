import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
});
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem("token");
  return config;
});
